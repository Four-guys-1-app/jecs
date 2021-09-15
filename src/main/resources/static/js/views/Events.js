export default function Events(props) {
    return `
    <div class="container">
        
        <header class="d-flex justify-content-center">
            <h1 id="event-header" class="mb-4">Events</h1>
        </header>
        
        <!-- Temporary img wrapper class and placeholder image for the map -->
        <div class="input-group mb-3">
            <input id="searchby" type="text" class="form-control" placeholder="Search by event title, date created('YYYY-MM-DD'), or zip code(12345)..." aria-label="Search by event title, date created('YYYY-MM-DD'), or zip code(12345)..." aria-describedby="e-search">
            <div class="input-group-append">
                <span class="input-group-text" id="e-search"><a href="">Search</a></span>
            </div>
        </div>
        <div id="event-map" class="img-square-wrapper my-4 d-flex justify-content-center">
            <img class="" src="http://via.placeholder.com/1050x700" alt="Card image cap">
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
        getEvents(eventDiv, apiUrl);

    })

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
                                    <div class="img-square-wrapper">
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