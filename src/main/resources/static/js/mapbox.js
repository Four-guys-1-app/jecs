import token from "./keys.js";

export default function getMap() {

    mapboxgl.accessToken = token();
    console.log(token());

    let map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-95.7129, 37.0902],
        zoom: 3
    });

}
