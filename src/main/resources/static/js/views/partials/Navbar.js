export default function Navbar(props) {
    return `
        <nav class="container-fluid navbar navbar-expand-lg fixed-top">
            <a class="navbar-brand">JECS</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="/home" data-link>Home</a>
                    <a class="nav-item nav-link" href="/events" data-link>Events</a>
                    <a class="nav-item nav-link" href="/blog" data-link>Blog</a>
                    <a class="nav-item nav-link" href="/account" data-link>Account</a>
                    <a class="nav-item nav-link" href="/about" data-link>About</a>
                </div>
            </div>
        </nav>
    `;
}