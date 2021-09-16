import Navbar from "./views/partials/Navbar.js";
import fetchData from "./fetchData";
import createView from "./createView";


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
    app.innerHTML = `${Navbar(null)} ${route.returnView(props)}`;

    // add events AFTER view is added to DOM
    if (route.viewEvent){
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
