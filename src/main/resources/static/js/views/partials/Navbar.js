export default function Navbar(props) {
    return `
<nav class="container-fluid navbar navbar-expand-lg fixed-top navbar-dark">
    <a class="navbar-brand" href="#">
        <i class="bi bi-compass"></i> JECS Network
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-item nav-link" href="/" data-link>Home</a>
            <a class="nav-item nav-link" href="/events" data-link>Events</a>
            <a class="nav-item nav-link" href="/blog" data-link>Blog</a>
            <a class="nav-item nav-link" href="/account" data-link>Account</a>
            <a class="nav-item nav-link" href="/about" data-link>About</a>
            <a class="nav-item nav-link" href="#" data-toggle="modal" data-target="#ModalLogin">Login</a>
        </div>
            
                <div class="navbar-nav ml-auto">
                <button type="button" class="mb-5 glow-on-hover" data-toggle="modal" data-target="#RegisterCenter"
                        id="reg-button">Register
                </button>
                <button type="button" class="mb-5 glow-on-hover" data-toggle="modal" data-target="#ModalCenter">Create
                    Event
                </button>
                </div>
            
    </div>
  

        </nav>
            <div class="modal fade" id="ModalCenter" data-backdrop="static" data-keyboard="false" tabindex="-1"
                 role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content" id="event-creation-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="ModalLongTitle">Create Event</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
        
                            <form id="eform" name="nameForm">
                                <div class="form-group">
                                    <label for="e-title">Event Title</label>
                                    <input type="text" class="form-control validate reg-fieldsE" id="e-title" placeholder="" name="nameTitle">
                                </div>
                                
                                <div class="form-group">
                                    <label for="e-description">Event information</label>
                                    <textarea class="form-control validate reg-fieldsE" id="e-description" rows="3" placeholder="Event details..." name="nameEventInfo"></textarea>
                                </div>
        
                                <div class="form-group">
                                    <label for="e-location">Drop a pin where your event will be...</label>
                                    <div id="user-event-creation-map">
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <div class="d-flex flex-column">
                                        <label for="activity-selection">Select an activity type</label>
                                        <select class="form-select" size="6" aria-label="activity selection" id="activity-selection">
                                            <option value="2">Hiking</option>
                                            <option value="3">Yoga</option>
                                            <option value="4">Swimming</option>
                                            <option value="5">Frisbee</option>
                                            <option value="6">Gardening</option>
                                            <option value="7">Skiing</option>
                                            <option value="8">Snowboarding</option>
                                            <option value="9">Surfing</option>
                                            <option value="10">Golf</option>
                                            <option value="11">Camping</option>
                                            <option value="12">Boating</option>
                                            <option value="13">Bowling</option>
                                            <option value="14">Paddle boarding</option>
                                            <option value="15">Tennis</option>
                                            <option value="16">Mountain biking</option>
                                            <option value="17">Nordic skiing</option>
                                            <option value="18">Snorkeling</option>
                                            <option value="19">Backpacking</option>
                                            <option value="20">Fishing</option>
                                            <option value="21">Water skiing</option>
                                            <option value="22">Jet skiing</option>
                                            <option value="23">Horseback Riding</option>
                                            <option value="24">Skydiving</option>
                                            <option value="25">Caving</option>
                                            <option value="26">Scuba Diving</option>
                                            <option value="27">Rock Climbing</option>
                                            <option value="28">Parasailing</option>
                                            <option value="29">Bungee Jumping</option>
                                            <option value="30">Heli skiing</option>
                                            <option value="31">Back country trekking</option>
                                            <option value="32">Basketball</option>
                                            <option value="33">Football</option>
                                            <option value="34">Weight lifting</option>
                                            <option value="35">Volleyball</option>
                                            <option value="36">Base jumping</option>
                                            <option value="37">Archery</option>
                                            <option value="38">Firing range</option>
                                            <option value="39">Zip lining</option>
                                            <option value="40">Paintball</option>
                                            <option value="41">Kickball</option>
                                            <option value="42">Kayaking</option>
                                            <option value="43">Rafting</option>
                                            <option value="44">Crossfit</option>
                                            <option value="45">Soccer</option>
                                            <option value="46">Baseball</option>
                                            <option value="47">Running</option>
                                            <option value="48">Cycling</option>
                                            <option value="49">Walking</option>
                                            <option value="50">Gym group</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <div class="d-flex flex-column">
                                        <label for="outdoor selection">Is this event outdoors?</label>
                                        <select class="form-select" aria-label="outdoor selection" id="outdoor-selection">
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </select>
                                    </div>
                                </div>
                                                                
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="myButton glow-on-hover" data-dismiss="modal">Cancel</button>
                            <button type="button" class="myButton btn-success glow-on-hover" id="create-event" data-dismiss="modal">Create Event
                            </button>
                        </div>
                    </div>performance_schema
                </div>
            </div>
            
            
            
            
            
            <!-- Will possibly refactor this, and the other forms to bootstrap 5 in the future -->
            <div class="modal fade" id="RegisterCenter" data-user_id="0" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="user_modal_title" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-notify modal-info" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title white-text" id="user_modal_title">Registration</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" class="white-text">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
            
                            <form class="needs-validation container" id="register" name="register">
            
                                <div class="md-form mb-3">
                                    <i class="fas fa-address-card prefix grey-text d-flex"></i>
                                    <input type="text" class="form-control validate reg-fields" id="r-name" name="fullname" placeholder="Full name" required />
                                <!-- <label for="r-name"></label>-->
                                </div>
            
                                <div class="md-form mb-3">
                                    <i class="fas fa-user-tag prefix grey-text d-flex"></i>
                                    <input type="text" class="form-control validate reg-fields" id="r-username" name="username" placeholder="Username" required />
                                <!-- <label for="r-username"></label>-->
                                </div>
            
                                <div class="md-form mb-3">
                                    <i class="fa fa-fw fa-at prefix grey-text d-flex"></i>
                                    <input type="email" class="form-control validate reg-fields" id="r-email" name="email" placeholder="E-Mail Address" required />
                                <!-- <label for="r-email"></label>-->
                                </div>
            
                                <div class="md-form mb-3">
                                    <i class="fas fa-sort-numeric-up prefix grey-text d-flex"></i>
                                    <input type="text" class="form-control validate reg-fields" id="r-zip" name="zip" placeholder="Zip code" required />
                                <!-- <label for="r-zip"></label>-->
                                </div>
                                
                                <div class="md-form mb-3">
                                    <i class="fa fa-fw fa-key prefix grey-text d-flex"></i>
                                    <input type="password" class="form-control validate reg-fields" id="r-password" name="password" placeholder="Password" required />
                                <!-- <label for="r-password"></label>-->
                                </div>
                                
                                <div class="md-form mb-3">
                                    <i class="fa fa-fw fa-key prefix grey-text d-flex"></i>
                                    <input type="password" class="form-control validate reg-fields" id="r-confirm" name="confirm" placeholder="Confirm Password" required />
                                <!-- <label for="r-confirm"></label>-->
                                </div>
            
                                <div class="md-form mb-3">
                                    <i class="fas fa-book-open prefix grey-text d-flex"></i>
                                    <textarea class="form-control validate" id="r-bio" name="r-bio" placeholder="Tell us about yourself..."></textarea>
                                </div>
            
                            </form>
                           
                        </div>
                        <div class="modal-footer">
                            <div class="col d-flex justify-content-end">
                                <button type="button" class="btn btn-success glow-on-hover" id="create-user" >Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
<!--              <div class="modal fade" id="RegisterCenter" data-backdrop="static" data-keyboard="false" tabindex="-1"-->
<!--                 role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">-->
<!--                <div class="modal-dialog modal-dialog-centered" role="document">-->
<!--                    <div class="modal-content">-->
<!--                        <div class="modal-header">-->
<!--                            <h5 class="modal-title" id="ModalLongTitle">Sign Up</h5>-->
<!--                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">-->
<!--                                <span aria-hidden="true">&times;</span>-->
<!--                            </button>-->
<!--                        </div>-->
<!--                        <div class="modal-body">-->
<!--        -->
<!--                            <form id="reg-input">-->
<!--                                <div class="form-group">-->
<!--                                    <label for="e-title">Full Name</label>-->
<!--                                    <input type="text" class="form-control reg-fields" id="r-name" required>-->
<!--                                </div>-->
<!--                                <div class="form-group">-->
<!--                                    <label for="e-title">Email</label>-->
<!--                                    <input type="text" class="form-control reg-fields" id="r-email" required>-->
<!--                                </div>-->
<!--                                <div class="form-group">-->
<!--                                    <label for="e-title">Zip Code</label>-->
<!--                                    <input type="text" class="form-control reg-fields" id="r-zip" required>-->
<!--                                </div>-->
<!--                                <div class="form-group">-->
<!--                                    <label for="e-title">Username</label>-->
<!--                                    <input type="text" class="form-control reg-fields" id="r-username" required>-->
<!--                                </div>-->
<!--                                <div class="form-group">-->
<!--                                    <label for="e-title">Password</label>-->
<!--                                    <input type="password" class="form-control reg-fields" id="r-password" required>-->
<!--                                    <small id="passHelp" class="form-text text-muted">Password must be at least 8 characters, and contain at least one digit, one capital letter, and one special character</small>-->
<!--                                </div>-->
<!--                                <div class="form-group">-->
<!--                                    <label for="e-title">Confirm Password</label>-->
<!--                                    <input type="password" class="form-control reg-fields" id="r-confirm" required>-->
<!--                                </div>-->
<!--                                <div class="form-group">-->
<!--                                    <label for="e-description">Bio</label>-->
<!--                                    <textarea class="form-control reg-fields" id="r-bio" rows="3" placeholder="Tell us about yourself"></textarea>-->
<!--                                </div>-->

<!--                              </form>-->
<!--                        </div>-->
<!--                        <div class="modal-footer">-->
<!--                            <button type="button" class="myButton" data-dismiss="modal">Cancel</button>-->
<!--                            <button type="button" class="myButton" id="create-user" data-dismiss="modal">Submit-->
<!--                            </button>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
            
            
            <div class="modal fade" id="ModalLogin" data-backdrop="static" data-keyboard="false" tabindex="-1"
            role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="ModalLongTitle">Log in</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
            
                            <form>
                                <div class="form-group">
                                    <label for="u-username">Username</label>
                                    <input type="text" class="form-control" id="u-username" placeholder="Enter Username">
                                </div>
            
                                <div class="form-group">
                                    <label for="u-password">Password</label>
                                    <input type="password" class="form-control" id="u-password" placeholder="Enter Password">
                                </div>
                                
                                <div class="form-element">
                                    <label for="remember-me">Remember me</label>
                                    <input type="checkbox" id="remember-me">
                                </div>
                                
                                <div class="form-element">
                                    <a href="#">Forgot Password?</a>
                                </div>
                                
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="myButton glow-on-hover" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="myButton glow-on-hover" id="auth-user" data-dismiss="modal">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            
    `;
}