import token from "./keys";

export default function getMap() {
    (function (){
        const MAPBOX_TOKEN = token();

        mapboxgl.accessToken = MAPBOX_TOKEN;

        let map = new mapboxgl.Map({
            container: "event-map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-95.7129, 37.0902],
            zoom: 3
        });

    })()


}

