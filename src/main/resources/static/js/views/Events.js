export default function Events(props) {
    return `
    <header>
    <h1>Events</h1>
    </header>
    <div class="container">
        <div>
            <button type="button" class="mb-5">Create Event</button>
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
        
        <div class="event-map">
    <!--        map goes here-->
        </div>
        <div id="event-list">
            ${getEventsHtml(props.events)}  // check actual value
        </div>
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
    //search function


}