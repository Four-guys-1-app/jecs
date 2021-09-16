import Navbar from "./views/partials/Navbar.js";


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

    $(document).ready(function(){
        // // For dynamic usage of the tag selector when creating a new post
        // var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        //     removeItemButton: true
        // });
        // navbarEventListeners();

        function checkInputs() {
            let isValid = true;
            $('.reg-fields').filter('[required]').each(function() {
                if ($(this).val() === '') {
                    $('#create-user').prop('disabled', true)
                    isValid = false;
                    return false;
                }
            });
            if(isValid) {$('#create-user').prop('disabled', false)}
            return isValid;
        }

        $('#confirm').click(function() {
            alert(checkInputs());
        });

        //Enable or disable button based on if inputs are filled or not
        $('input').filter('[required]').on('keyup',function() {
            checkInputs()
        })

        checkInputs();

        navbarEventListeners();
    })


    // add events AFTER view is added to DOM
    if (route.viewEvent){
        route.viewEvent();
    }

}
/* Event Listeners for navbar buttons */
function navbarEventListeners() {

    $("#create-user").click(function (){

        let fullName = $("#r-name").val();
        let email = $("#r-email").val();
        let zip = $("#r-zip").val();
        let username = $("#r-username").val();
        let password = $("#r-password").val();
        let confirmPassword = $("#r-confirm").val();
        let bio = $("#r-bio").val();
        // const $parent = $("#choices-multiple-remove-button");
        // let catIds = $parent.children('option').map(function() {
        //     return { id: parseInt($(this).val())};
        // })



        console.log(fullName);
        console.log(email);
        console.log(zip);
        console.log(password);
        console.log(confirmPassword);
        console.log(bio);
        // console.log(catIds);

        // This line goes inside the object that we create
        // types: $.makeArray(catIds)

        // if (validateEmail(email) === false){
        //     alert("Invalid Email address, please try again");
        //     return;
        // }



        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    })
}
