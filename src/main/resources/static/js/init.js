import createView, {attachHistoryListener} from './createView.js';

/**
 * When the DOM loads, build the view given the current endpoint.
 */
function loadViewOnPageRequest() {
    window.addEventListener('DOMContentLoaded', function () {
        //TODO: Switched to location.pathname so the route would be accurate to current view
        createView(location.pathname);
    });

    // window.addEventListener('popstate', function () {
    //     console.log(history.getState);
    //     history.back();
    // });
}

/**
 * Add a listener that will change the view if a nav link is clicked.
 */
function addListenerToNavLinks() {
    document.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.hasAttribute("href")&&e.target.getAttribute("href")[0]== "/") {
            const URI = e.target.href.substring(location.origin.length);

            createView(URI);
        }
    });
}



export default function init() {
    attachHistoryListener();
    loadViewOnPageRequest();
    addListenerToNavLinks();

    fetch("/api/users/loggedIn").then((response)=>{
        if (response.status == 401 && localStorage.getItem("access_token")!= null){
            localStorage.removeItem("access_token")
            localStorage.removeItem("refresh_token")
        }
    })
}