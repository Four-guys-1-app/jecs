import {getHeaders} from "./auth.js";

export default function addEvent() {

    (function (){
        // Initialize form validation on the registration form.
        // It has the name attribute "registration"
        $("form[name='nameForm']").validate({
            // Specify validation rules
            rules: {
                // The key name on the left side is the name attribute
                // of an input field. Validation rules are defined
                // on the right side
                nameTitle: "required",
                nameEventInfo: "required"


            },
            // Specify validation error messages
            messages: {
                nameTitle: "Please Enter Event Title",
                nameEventInfo: "Please enter Event Description"
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
                form.submit();
            }
        });
    })()


}




