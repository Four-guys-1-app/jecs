export default function Events(props) {
    return `
    <div class="container">
        
        <header>
            <h1 id="event-header" class="mb-4">Events</h1>
        </header>
        
        <div>
            <div class="d-flex justify-content-between">
                <div class="form-group">
                    <input type="text" class="form-control" id="searchby" placeholder="Search by event title, date created('YYYY-MM-DD'), or zip code(12345)...">
                </div>
                <div class="form-group">
                    <button type="button" class="form-control" id="e-search">Search</button>
                </div>
            </div>
        </div>

    
        <div class="modal fade" id="ModalCenter" data-backdrop="static" data-keyboard="false" tabindex="-1"
             role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ModalLongTitle">Create Event</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
    
                        <form>
                            <div class="form-group">
                                <label for="e-title">Event Title</label>
                                <input type="text" class="form-control" id="e-title" placeholder="">
                            </div>
                            
                            <div class="form-group">
                                <label for="e-description">Post Content</label>
                                <textarea class="form-control" id="e-description" rows="3" placeholder="Event details..."></textarea>
                            </div>
    
                            <div class="form-group">
                                <label for="e-title">Event Title</label>
                                <input type="text" class="form-control" id="e-title" placeholder="">
                            </div>
    
                            <div class="form-group">
                                <label for="e-location">Event location</label>
                                <div id="user-event-creation-map">
                                    <!-- map here-->
                                </div>
                            </div>
                            
                            <div>
                                <!-- dropdown for event type goes here-->
                            </div>
                            
                            <div>
                                <!-- yes or no dropdown for outdoor-->
                            </div>
                            
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="myButton" data-dismiss="modal">Cancel</button>
                        <button type="button" class="myButton" id="create-event" data-dismiss="modal">Create Event
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- UNDER CONSTRUCTION BELOW...
        <div>
            <button type="button" class="mb-5" data-toggle="modal" data-target="#ModalCenter">Create Event</button>
        </div> 
        
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

        getEvents(eventDiv, apiUrl);

    })

    const getEvents = async (element, url) => {
        const response = await fetch(url);
        const jsonRes = await response.json();
        console.log(jsonRes);
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
                                <div class="card-footer">
                                    <small class="text-muted">Activity: ${event.type.type}</small>
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