import getMap, {setMarker} from "../mapbox.js";

export default function EventView(props) {
    return `
    <div class="container">
        
        <header class="d-flex justify-content-between">
            <h1 id="event-header" class="mb-4">${props.event.title}</h1>
            <p>Created on: ${props.event.dateCreated}</p>
            <p>By: ${props.event.user.username}</p>
        </header>
        <hr>
        <div id="event-view-map" class="my-5 rounded d-flex justify-content-center">
        </div>
        <hr>
        
        <div class="d-flex justify-content-center mb-4">
            <p>${props.event.description}</p>
        </div>
        <div class="d-flex justify-content-center mb-4">
            <h2>-Event Comments-</h2>
        </div>
        <div class="container justify-content-center mt-5 border-left border-right">
            <div class="d-flex justify-content-center pt-3 pb-2"> 
                <input type="text" name="text" placeholder="+ Add a comment" class="form-control addtxt"> 
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button class="glow-on-hover">Add comment</button>
        </div>
       
       
       
    </div>
    `;
}

function getCommentsHtml(comments) {
    return comments.map(comment => `
                
                `).join('')
}



export function EventViewEvent()  {


    let map = getMap($("#event-view-map").attr("id"), 13);

    map.on('load', () => {
        map.resize();
    })




}