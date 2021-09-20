// validation from sitepoint.com

$(function() {

    $.validator.addMethod("PASSWORD",function(value,element){
        return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,25})$/i.test(value);
    },"Passwords are 8-25 characters with uppercase letters, lowercase letters, at least one number, and at least one special character.");


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
                digits: true,
                min: 5,
                max: 5
            },
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
            email: "Please enter a valid email address",
            zip: "Please enter only a 5 digit zip code",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 8 characters long",
                maxlength: "Your password must be no more than 25 characters long",
            },
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});



/*

                ------ STACK OVERFLOW EXAMPLE OF USING CUSTOM METHODS FOR VALIDATION -------

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <script src="http://YOURJQUERYPATH/js/jquery.js" type="text/javascript"></script>
    <script src="http://YOURJQUERYPATH/js/jquery.validate.js" type="text/javascript"></script>
    <script type="text/javascript">

        $().ready(function() {
            $.validator.addMethod("EMAIL", function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
            }, "Email Address is invalid: Please enter a valid email address.");

            $.validator.addMethod("PASSWORD",function(value,element){
                return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
            },"Passwords are 8-16 characters with uppercase letters, lowercase letters and at least one number.");

            $.validator.addMethod("SUBMIT",function(value,element){
                return this.optional(element) || /[^ ]/i.test(value);
            },"You did not click the submit button.");

            // Validate signup form on keyup and submit
            $("#LOGIN").validate({
                rules: {
                    EMAIL: "required EMAIL",
                    PASSWORD: "required PASSWORD",
                    SUBMIT: "required SUBMIT",
                },
            });
        });
    </script>
</head>
<body>
    <div id="LOGIN_FORM" class="form">
        <form id="LOGIN" name="LOGIN" method="post" action="/index/secure/authentication?action=login">
            <h1>Log In</h1>
            <div id="LOGIN_EMAIL">
                <label for="EMAIL">Email Address</label>
                <input id="EMAIL" name="EMAIL" type="text" value="" tabindex="1" />
            </div>
            <div id="LOGIN_PASSWORD">
                <label for="PASSWORD">Password</label>
                <input id="PASSWORD" name="PASSWORD" type="password" value="" tabindex="2" />
            </div>
            <div id="LOGIN_SUBMIT">
                <input id="SUBMIT" name="SUBMIT" type="submit" value="Submit" tabindex="3" />
            </div>
        </form>
    </div>
</body>
</html>


*/