import Navbar from "./views/partials/Navbar.js";
import fetchData from "./fetchData.js";
import createView from "./createView.js";


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

    // add view and navbar to DOM
    app.innerHTML = `${Navbar(props)} ${route.returnView(props)}`;

    $(document).ready(function () {




        // document.addEventListener('DOMContentLoaded', function (e) {
        //
        //     const user_form = document.getElementById('user_form');
        //
        //     user_form.addEventListener('submit', function (event) {
        //
        //         console.log('form submit');
        //
        //         event.preventDefault();
        //         event.stopPropagation();
        //
        //         let valid_form = false;
        //
        //         if (user_form.checkValidity() !== false) {
        //             valid_form = true;
        //         }
        //
        //         user_form.classList.add('was-validated');
        //
        //         if (valid_form) {
        //             console.log('valid form');
        //         } else {
        //             console.log('invalid ');
        //         }
        //
        //     }, false);
        //
        // });




        // // For dynamic usage of the tag selector when creating a new post
        // var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        //     removeItemButton: true
        // });
        // navbarEventListeners();




        // $('.mdb-select').materialSelect();

        // function checkInputs() {
        //     let isValid = true;
        //     $('.reg-fields').filter('[required]').each(function () {
        //         if ($(this).val() === '') {
        //             $('#create-user').prop('disabled', true)
        //             isValid = false;
        //             return false;
        //         }
        //     });
        //     if (isValid) {
        //         $('#create-user').prop('disabled', false)
        //     }
        //     return isValid;
        // }
        //
        // $('#confirm').click(function () {
        //     alert(checkInputs());
        // });
        //
        // //Enable or disable button based on if inputs are filled or not
        // $('input').filter('[required]').on('keyup', function () {
        //     checkInputs()
        // })
        //
        // checkInputs();

        // navbarEventListeners();
    })


    $(function() {

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
                zip: "required ZIPCODE",
                password: "required PASSWORD",
                confirm: {
                    equalTo: "#password"
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
                console.log("Button worked")
                form.submit();
            }
        });
    });


    // add events AFTER view is added to DOM
    if (route.viewEvent) {
        route.viewEvent();
    }


    // $(`#auth-user`).click(function () {
    //     let username = $(`#u-username`).val();
    //     let password = $(`#u-password`).val();
    //
    //     console.log(username);
    //     console.log(password);
    //
    //     fetch('https://localhost8080/api/users', {
    //         method: 'POST',
    //         body: 'grant_type=client_credentials&client_id=' + username + '&client_secret=' + password,
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         }
    //     }).then(function (resp) {
    //
    //         // Return the response as JSON
    //         return resp.json();
    //
    //     }).then(function (data) {
    //
    //         // Log the API data
    //         console.log('token', data);
    //
    //     }).catch(function (err) {
    //
    //         // Log any errors
    //         console.log('something went wrong', err);
    //
    //     });
    //     });


}








































































































/* Event Listeners for navbar buttons */
function navbarEventListeners() {

    $("#create-user").click(function () {

        let fullName = $("#r-name").val().trim();
        let email = $("#r-email").val().trim();
        let zip = $("#r-zip").val().trim();
        let username = $("#r-username").val().trim();
        let password = $("#r-password").val();
        let confirmPassword = $("#r-confirm").val();
        let bio = $("#r-bio").val();

        if (zip.length !== 5) {
            alert("Zip code must in 5 digit format");
            return;
        }

        if (validatePassword(password) !== true) {
            console.log(password);
            alert("Password is not long enough, or is not at least 8 characters");
            return;
        }

        if (confirmPassword !== password) {

        }


        console.log(validateEmail(email));

        console.log(fullName);
        console.log(email);
        console.log(zip);
        console.log(password);
        console.log(confirmPassword);
        console.log(bio);


        // const $parent = $("#choices-multiple-remove-button");
        // let catIds = $parent.children('option').map(function() {
        //     return { id: parseInt($(this).val())};
        // })
        // console.log(catIds);


        // This line goes inside the object that we create
        // types: $.makeArray(catIds)


    })
}

function validatePassword(password) {
    const passReg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,25})/;
    return passReg.test(password);
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}