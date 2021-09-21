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
