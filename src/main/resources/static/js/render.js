import Navbar from "./views/partials/Navbar.js";
import fetchData from "./fetchData.js";
import createView from "./createView.js";
import {LoginEvent, getHeaders, setTokens} from "./auth.js";
import addEvent from "./createEvent.js";
import getMap, {reverseGeocode, createPopup, trySetMarker, setMarker} from "./mapbox.js";

let currentCoordinates = [];
let address;  //TODO: retrieve address as well as coordinates for location data
let marker;


import Footer from "./views/partials/Footer.js";


/**
 * Pushes the current URI to the URL bar and sets the HTML of the app div.
 * @param props - the data required for view rendering
 * @param route - the object containing information for the given endpoint
 */
export default function render(props, route) {
    const app = document.querySelector('#app');
    const title = `JECS - ${route.title}`;
    history.pushState(props, title, route.uri);
    document.title = title;

    // Initialize vars for create event map
    let map;

    // add view and navbar to DOM
    app.innerHTML = `${Navbar(props)} ${route.returnView(props)} ${Footer(null)}`;

    $(document).ready(function () {
        console.log(props);
        LoginEvent();
        addEvent();
        map = getMap($("#user-event-creation-map").attr("id"));


        map.on("click", function (e){
            console.log(e);
            if (marker) {
                marker.remove();
            }
            currentCoordinates = [e.lngLat.lng, e.lngLat.lat];
            console.log(currentCoordinates);
            marker = setMarker(e.lngLat, map)
            reverseGeocode(e.lngLat, mapboxgl.accessToken).then(function(results) {
                console.log(results);
                createPopup(results, marker, map);
            });
        })




        $.validator.addMethod("PASSWORD",function(value,element){
            return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
        },"Passwords are 8-25 characters with uppercase letters, lowercase letters, at least one number, and at least one special character");

        $.validator.addMethod("ZIPCODE",function(value,element){
            return this.optional(element) || /^\d{5}$/.test(value);
        },"Please provide a zip code in a 5 digit format");


        // Initialize form validation on the registration form.
        // It has the name attribute "registration"
        $("form[name='register']").validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                fullname: "required",
                username: {
                    required: true,
                    minlength: 6
                },
                email: {
                    required: true,
                    // Specify that email should be validated
                    // by the built-in "email" rule
                    email: true
                },
                zip: {
                    required: true,
                    ZIPCODE: true
                },
                password: {
                    required: true,
                    PASSWORD: true
                },
                confirm: {
                    required: true,
                    equalTo: "#r-password"
                }
            },
            // Specify validation error messages
            messages: {
                fullname: "Please enter your full name",
                username: {
                    required: "Please enter your user name, at least 6 characters",
                    minlength: "Your user name must be at least 6 characters long"
                },
                email: "Please enter a valid email address"
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
                form.submit();
            }
        });


        function checkInputs() {
            let isValid = true;
            $('.reg-fields').filter('[required]').each(function () {
                if ($(this).val() === '') {
                    $('#create-user').prop('disabled', true)
                    isValid = false;
                    return false;
                }
            });

            if (isValid) {
                $('#create-user').prop('disabled', false)
            }
            return isValid;
        }

        //Enable or disable button based on if inputs are filled or not
        $('input').filter('[required]').on('keyup', function () {
            checkInputs()
        })

        checkInputs();
        navbarEventListeners();
        map.resize();
    })



    // add events AFTER view is added to DOM
    if (route.viewEvent) {
        route.viewEvent();
    }





}








































































































/* Event Listeners for navbar buttons */
//TODO: adding coordinates
function navbarEventListeners() {

    $("#create-user").click(function () {

        if ($("form[name='register']").valid()) {
            let fullName = $("#r-name").val().trim();
            let email = $("#r-email").val().trim();
            let zip = $("#r-zip").val().trim();
            let username = $("#r-username").val().trim();
            let password = $("#r-password").val();
            let bio = $("#r-bio").val();

            let postObj = {
                fullName: fullName,
                username: username,
                email: email,
                password: password,
                bio: bio,
                postalCode: zip
            }

            if (createUserFetch(postObj)) {
                $("#r-name").val("");
                $("#r-email").val("");
                $("#r-zip").val("");
                $("#r-username").val("");
                $("#r-password").val("");
                $("#r-confirm").val("");
                $("#r-bio").val("");

                $("#RegisterCenter").modal("hide");
            }

        } else {
            console.log("The form is not valid")
        }
    })

    $("#create-event").click(function () {

        // if ($("form[name='nameForm']").valid()) {
            let eventTitle = $("#e-title").val().trim();
            let eventDescription = $("#e-description").val().trim();


            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);

            let thisDate = today.toISOString()
            console.log(thisDate);

            let postObj = {
                title: eventTitle,
                description: eventDescription,
                dateCreated: `${thisDate}`,
                location: {
                    city: "San Antonio",  //TODO: will populate with address data, if any
                    state: "Texas",
                    latitude: `${currentCoordinates[1]}`,
                    longitude: `${currentCoordinates[0]}`,
                    postalCode: "78242"
                },
                outdoor: "y",
                type: {
                    "id": 4,
                    "type": "Swimming"
                }
            }

            if (createEventFetch(postObj)) {
                $("#e-title").val("");
                $("#e-description").val("");
                marker.remove();
                currentCoordinates = [];

                // TODO: need to clear and recenter map after an event is created

                $("#ModalCenter").modal("hide");
            }

        // } else {
        //     console.log("The form is not valid")
        // }


    })

}


const createUserFetch = async (dataObj) => {
    const settings = {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(dataObj)
    };

    const fetchResponse = await fetch("/api/users/create", settings);
    const data = await fetchResponse.json();
    console.log(data);
    console.log(`User ${dataObj.fullName} was created successfully`);

}

const createEventFetch = async (dataObj) => {
    const settings = {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(dataObj)
    };

    const fetchResponse = await fetch("/api/events/create", settings);
    const data = await fetchResponse.json();
    console.log(data);
    console.log(`event '${dataObj.title}' was created successfully`);


}


