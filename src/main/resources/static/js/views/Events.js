import {getHeaders} from "../auth.js";
import fetchData from "../fetchData.js";
import render from "../render.js";
import router from "../router.js";
import getMap, {setMarker} from "../mapbox.js";

export default function Events(props) {

    return `
    <div class="container">
        
        <header class="d-flex justify-content-center">
            <h1 id="event-header" class="mb-4">Events</h1>
        </header>
        
        <!-- Temporary img wrapper class and placeholder image for the map -->
        <div class="input-group mb-3 d-flex justify-content-between">
            <div>
                <input id="searchby" type="text" class="form-control" placeholder="Enter search term" aria-describedby="e-search">
                <small class="text-muted">Search by event title, date created('YYYY-MM-DD'), or zip code(12345)...</small>
            </div>

            <div class="">
                <span class="input-group-text" id="e-search"><a href="">Search</a></span>
            </div>
        </div>
        <div id="event-search-map" class="mt-5 rounded d-flex justify-content-center">
           <!-- <img class="" src="http://via.placeholder.com/1050x700" alt="Card image cap"> -->
        </div>
    
        
        <!-- UNDER CONSTRUCTION BELOW...
        <div class="event-map">
            map goes here
        </div>
        -->
        <div id="event-list">
         
        </div> 
        
    </div>
    `;
}

export function EventEvents()  {
    let mapId = $("#event-search-map").attr("id");
    let map = getMap(mapId);
    map.resize();
    let eventSearchArray = [];


    // let eventGeo = myGeoCoder;
    //
    // addGeoEvent(eventGeo);


    $("#e-search").click(function() {
        const searchInput = $("#searchby");
        const eventDiv = $("#event-list");

        if (searchInput.val() === "") {
            alert("Please enter a search value to proceed...");
            return;
        } else if (searchInput.val().length > 255) {
            alert("You have entered too many characters.  Please try again.");
            return;
        }

        let apiUrl = buildUrl(searchInput.val());

        eventDiv.empty();
        getEvents(eventDiv, apiUrl).then(data => {
            let locationGroupArray = [];
            data.forEach(event => {
                let location = [event.location.longitude, event.location.latitude];
                let currMarker = setMarker(location, map);
                locationGroupArray.push(L.marker(location));
                currMarker.setLngLat(location).setPopup(new mapboxgl.Popup().setHTML(`<p><a href="#" onclick="viewDetails(${event.id})">${event.title}</a></p>`));
            })
            console.log(locationGroupArray);
            let bounds = L.latLngBounds(locationGroupArray);
            map.fitBounds(bounds);
        })

        console.log(eventSearchArray);




    })



     window.viewDetails = (eventId) => {
        let route = router("/event");
        let request = {
            headers: getHeaders()
        }
        fetchData({event: `/api/events/${eventId}`}, request).then((props) => {
            render(props, route);
        });
    }

    const getEvents = async (element, url) => {
        const response = await fetch(url);
        const jsonRes = await response.json();
        console.log(jsonRes);
        if (jsonRes.length === 0) {
            element.append(`<div class="container-fluid justify-content-center"><h4>-- No events found --</h4></div>`)
        }

        element.append( jsonRes.map(event => `
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 mt-3">
                            <div class="card" data-id="${event.user.id}">
                                <div class="d-flex card-horizontal">
                                    <div class="img-square-wrapper" onclick="viewDetails(${event.id})">
                                        <img class="" src="http://via.placeholder.com/150x90" alt="Card image cap">
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">${event.title}</h4>
                                        <p class="card-text">${event.description}</p>
                                        <p class="card-text">Event created by: ${event.user.username}</p>
                                    </div>
                                </div>
                                <div class="card-footer d-flex justify-content-between">
                                    <small class="text-muted">Activity: ${event.type.type}</small>
                                    <small class="text-muted">Zip code: ${event.location.postalCode}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `).join(''))
        return jsonRes;

    }

    const buildUrl = searchItem => {
        const baseUrl = `http://localhost:8080/api/events/`;
        let fetchUrl;

        const zipPatt = /\d{5}/;
        const datePatt = /\d{4}-\d{2}-\d{2}/;
        const titlePatt = /[\s\S]{1,255}/;

        switch (true) {
            case datePatt.test(searchItem):
                fetchUrl = baseUrl + `date?dateCreated=${searchItem}`;
                console.log(`Search item is '${searchItem}'`);
                break;
            case zipPatt.test(searchItem):
                fetchUrl = baseUrl + `postalCode?postalCode=${searchItem}`;
                break;
            case titlePatt.test(searchItem):
                fetchUrl = baseUrl + `title?title=${searchItem}`;
                break;
            default:
                console.log("The search value is not valid");
        }

        return fetchUrl;

    }


}