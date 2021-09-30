import getMap, {setMarker} from "../mapbox.js";

export default function EventView(props) {
    return `
    <div class="container">
        
        <header class="d-flex justify-content-between">
            <h1 id="event-header" class="mb-4 event-header">${props.event.title}</h1>
            <p  class="event-header">Created on: ${props.event.dateCreated.replace(/T/, " ").replace(/\..*/, "")}</p>
            <p class="event-header">By: ${props.event.user.fullName}</p>
        </header>
        <hr id="location-data" data-tokens="${[props.event.location.longitude, props.event.location.latitude]}">
        <div id="event-view-map" class="my-5 rounded d-flex justify-content-center">
        </div>
        <hr>
        
        <div class="d-flex justify-content-center my-4">
            <p>${props.event.description}</p>
        </div>
        
        <section class="mt-4">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5 col-md-6 col-12 pb-4" id="comment-bin">
                        <h1 class="commentH">Comments</h1>
                        ${getCommentsHtml(props.event.comments)}
                    </div>
                    <div class="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                        <form id="align-form">
                            <div class="form-group-comments mb-4">
                                <h4 class="commentH mb-2">Leave a comment</h4>
                                <textarea name="msg" id="msg"  cols="30" rows="5" class="form-control" placeholder="Message"></textarea>
                            </div>
                            <div class="form-group-comments"> <button type="button" id="comment-button" class="glow-on-hover">Post Comment</button> </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
       
    </div>
    `;
}

function getCommentsHtml(comments) {
    return comments.map(comment => `
                <div class="comment mt-4 text-justify float-left"> 
                    <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40">
                    <h4 class="commentH" data-id="${comment.user.id}">${comment.user.fullName}</h4> 
                    <span>- ${comment.postedDate.replace(/T/, " ").replace(/\..*/, "")}</span> 
                    <br>
                    <p data-id="${comment.id}">${comment.content}</p>
                </div>
                `).join('')
}



export function EventViewEvent()  {

    let map = getMap($("#event-view-map").attr("id"), 13);
    let location = $("#location-data").attr("data-tokens").split(",");
    let bounds = new mapboxgl.LngLatBounds();
    bounds.extend(location)

    console.log(location);
    map.on('load', () => {
        setMarker(location, map);
        map.resize();
        map.fitBounds(bounds, {padding: 50});
    })




}