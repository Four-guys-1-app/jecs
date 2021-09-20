import {getHeaders} from "../auth.js";

export default function addEvent() {

    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='e-form']").validate({
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
            nameEventInfo: {
                required: "Please enter Event Description",
            },
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });

    $("#create-event").click(function () {

        if ($("form[name='register']").valid()) {
            let eventTitle = $("#e-title").val().trim();
            let eventDescription = $("#e-description").val().trim();


            let postObj = {
                title: eventTitle,
                description: eventDescription,

            }

            if (createEventFetch(postObj)) {
                $("#e-title").val("");
                $("#e-description").val("");

                $("#ModalCenter").modal("hide");
            }

        } else {
            console.log("The form is not valid")
        }



    })


}


const createEventFetch = async (dataObj) => {
    const settings = {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(dataObj)
    };

    const fetchResponse = await fetch("http://localhost:8080/api/events", settings);
    const data = await fetchResponse.json();
    console.log(data);
    console.log(`User ${dataObj.fullName} was created successfully`);

}

