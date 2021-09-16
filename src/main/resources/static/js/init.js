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

}

export default function init() {
    loadViewOnPageRequest();
    addListenerToNavLinks();
    tagSelectorSupport();
    navbarEventListeners();
}