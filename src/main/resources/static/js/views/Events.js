export default function Events(props) {
    return `
    <div class="container">
        
        <header>
            <h1 id="event-header" class="mb-4">Events</h1>
        </header>
        
        <div class="container">
            <div class="d-flex justify-content-between">
                <div class="form-group">
                    <input type="text" class="form-control" id="searchby-title" placeholder="Search by title...">
                </div>
                <div>
                    <p>-- or --</p>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="searchby-zip" placeholder="Search by zipcode">
                </div>
            </div>
            <div class="d-flex justify-content-center">
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
        <div id="event-list">
           (call getEventsHtml here)  check actual value
        </div> 
        -->
    </div>
    `;
}

function getEventsHtml(events) {
    return events.map(event => `
                <div class="card mb-3" data-id="${event.id}" >
                    <div class="card-header d-flex justify-content-between">
                        <p class="event-title">${event.title}</p><p class="event-user" data-id="${event.user.id}">by: ${event.user.username}</p>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${event.content}</p>
                    </div>
                    <div class="card-footer d-flex">
                        <p>${event.type}</p>
                    </div>
                </div>
                `).join('')
}



export function EventEvents()  {
    $("#e-search").click(function() {
        let titleSearch = $("#searchby-title");
        let zipSearch = $("#searchby-zip");

        // if both inputs are blank or both have a value, throw an alert
        if (titleSearch.val() === "" && zipSearch.val() === "") {
            alert("Please enter a title or a zip code...");
            return;
        } else if (titleSearch.val() !== "" && zipSearch.val() !== "") {
            alert("Please enter either a title or a zip code...");
            return;
        }

        if (titleSearch.val() !== "" && titleSearch.val().length < 256) {

        }
    })

    const getEvents = async () => {
        const response = await fetch("http://localhost:8080/api/events");
        const jsonRes = await response.json();
        console.log(jsonRes);
    }


}