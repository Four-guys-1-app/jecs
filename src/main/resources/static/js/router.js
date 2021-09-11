import Events, {EventEvents} from "./views/Events.js";
import Home, {HomeEvent} from "./views/Home.js";
import Loading from "./views/Loading.js";
import Error404 from "./views/Error.js";
import About, {AboutEvent} from "./views/About.js";

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
            state: {
                events: '/api/events'
            },
            uri: '/events',
            title: "Events",
            viewEvent: EventEvents
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: 'ERROR',
        },
        '/about': {
            returnView: About,
            state: {},
            uri: '/',
            title: "About",
            viewEvent: AboutEvent
        },


    };

    return routes[URI];
}

