import Events, {EventEvents} from "./views/Events.js";
import Home, {HomeEvent} from "./views/Home.js";
import Loading from "./views/Loading.js";
import Error404 from "./views/Error.js";
import About, {AboutEvent} from "./views/About.js";
import Blog, {BlogEvent} from "./views/blogView.js";
import EventView, {EventViewEvent} from "./views/EventView.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {
                types: `/api/types`
            },
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
        '/event': {
            returnView: EventView,
            state: {
                event: '/api/events/1',
                // types: `/api/types`
            },
            uri: '/event',
            title: "EventView",
            viewEvent: EventViewEvent
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
        '/blog': {
            returnView: Blog,
            state: {
                types: `/api/types`
            },
            uri: '/',
            title: "Blog",
            viewEvent: BlogEvent
        },


    };

    return routes[URI];
}

