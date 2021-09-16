import createView from './createView.js';

/**
 * When the DOM loads, build the view given the current endpoint.
 */
function loadViewOnPageRequest() {
    window.addEventListener('DOMContentLoaded', function() {
        //TODO: Switched to location.pathname so the route would be accurate to current view
        createView(location.pathname);
    });

    window.addEventListener('popstate', function(){
        console.log(history.getState);
        history.back();
    });
}

/**
 * Add a listener that will change the view if a nav link is clicked.
 */
function addListenerToNavLinks() {
    document.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.dataset['link'] !== undefined) {
            const URI = e.target.href.substring(location.origin.length);
            createView(URI);
        }
    });
}

// For dynamic usage of the tag selector when creating a new post
function tagSelectorSupport() {
    (function (){
        var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
            removeItemButton: true
        });
    })()
}

/* Event Listeners for navbar buttons */
function navbarEventListeners() {
    $("#reg-button").click(function (){
        let inputs = $(".modal-body").children().filter(item => {
            return item.children("input").val() === "";
        })

        console.log(inputs);
        console.log(fullName);
        console.log(email);
        console.log(zip);
        console.log(password);
        console.log(confirmPassword);
        console.log(bio);

        if (inputs.length > 0){
            alert("Please fill out all fields");
            return;
        }

        let fullName = $("#r-name");
        let email = $("#r-email");
        let zip = $("#r-zip");
        let username = $("#r-username");
        let password = $("#r-password");
        let confirmPassword = $("#r-confirm");
        let bio = $("#r-bio");
        const $parent = $("#choices-multiple-remove-button");
        let catIds = $parent.children('option').map(function() {
            return { id: parseInt($(this).val())};
        })

        // This line goes inside the object that we create
        // types: $.makeArray(catIds)

        if (validateEmail(email) === false){
            alert("Invalid Email address, please try again");
            return;
        }



        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
    })
}

export default function init() {
    loadViewOnPageRequest();
    addListenerToNavLinks();
    tagSelectorSupport();
    navbarEventListeners();
}