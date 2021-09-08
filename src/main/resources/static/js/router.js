import Events, {EventEvents} from "./views/Events.js";
import Home, {HomeEvent} from "./views/Home.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/home': {
            returnView: Home,
            state: {},
            uri: '/',
            title: "Home",
            viewEvent: HomeEvent
        },
        '/events': {
            returnView: Events,
            state: {},
            uri: '/events',
            title: "Events",
            viewEvent: EventEvents
        },


    };

    return routes[URI];
}

