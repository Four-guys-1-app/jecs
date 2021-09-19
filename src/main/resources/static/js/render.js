import Navbar from "./views/partials/Navbar.js";
import fetchData from "./fetchData.js";
import createView from "./createView.js";
import {getHeaders} from "./auth.js";


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
        console.log(props);

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
                console.log("Button worked")
                form.submit();
                $("form[name='register']").validate().resetForm();
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

        $('#confirm').click(function () {
            alert(checkInputs());
        });

        //Enable or disable button based on if inputs are filled or not
        $('input').filter('[required]').on('keyup', function () {
            checkInputs()
        })

        checkInputs();

        navbarEventListeners();
    })

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

        console.log(fullName);
        console.log(email);
        console.log(zip);
        console.log(password);
        console.log(confirmPassword);
        console.log(bio);

        let postObj = {
            fullName: fullName,
            username: username,
            email: email,
            password: password,
            bio: bio,
            postalCode: zip
        }
        postObj = JSON.stringify(postObj);

        $.ajax({
            type: "POST",
            url: "http://localhost:8080/api/users/create",
            contentType: getHeaders(),
            data: postObj,
            success: function (result) {
                console.log(result);
                $("form[name='register']").validate().resetForm();
            },
            error: function (result) {
                console.log("Caught error for ajax call");
                console.log(result);
                alert("There was an issue with registration.  Please try again later.")
            }
        })



    })
}