import token from "./keys.js";

export default function getMap(mapId) {

    mapboxgl.accessToken = token();

    return new mapboxgl.Map({
        container: mapId,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-95.7129, 37.0902],
        zoom: 3
    });


}

// export function createPopup(popupDetails, marker) {
//     let popup = new mapboxgl.Popup().setHTML(`<p><a href="#">${popupDetails}</a></p>`).addTo(map);
//     marker.setPopup(popup);
// }
export function setMarker(point, map) {
    return new mapboxgl.Marker({
        color: '#F84C4C'
    }).setLngLat(point).addTo(map);

}
export function setGeoCoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        // marker: false
    })
}

export let myGeoCoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false
})


export function addGeoEvent(geocode) {
    map.addControl(geocode);
    geocode.on("result", function (e){
        console.log(e);
        createPopup(e.result.place_name, setMarker(e.result.center));
    })
}