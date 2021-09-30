export default function Navbar(props) {
    return `
<nav class="container-fluid navbar navbar-expand-lg fixed-top navbar-dark p-4">
<a class="navbar-brand logo-link" href="/" data-link></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-item nav-link" href="/events" data-link>Events</a>
            <a class="nav-item nav-link" href="/blog" data-link>Blog</a>
<!--            <a class="nav-item nav-link" href="/account" data-link>Account</a>-->
            <a class="nav-item nav-link" href="/about" data-link>About</a>
            ${localStorage.getItem("access_token") == null
        ? '<a class="nav-item nav-link" href="#" data-toggle="modal" data-target="#ModalLogin">Login</a>'
        :'<a class="nav-item nav-link" href="#" id="loggedOut">Log Out</a>'}
        </div>
       

                <div class="ml-auto d-flex align-items-center justify-content-end">
                <button type="button" class="glow-on-hover mx-2 align-content-between" data-toggle="modal" data-target="#RegisterCenter"
                        id="reg-button">Register
                </button>
                <button type="button" class="glow-on-hover mx-2 align-content-between" data-toggle="modal" data-target="#ModalCenter">Create
                    Event
                </button>
                </div>
                </div>
 </nav>
            <div class="alert alert-success" id="success-alert" role="alert" style="display: none">
<!--                <button type="button" class="close" data-dismiss="alert">x</button>-->
                <strong id="success">Success! </strong>
                <p id="alert-content"></p>
           </div>
            
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
                                    <label for="activity-selection">What kind of event is this?</label>
                                    <select class="selectpicker border rounded" data-live-search="true" data-width="100%" id="activity-selection">
                                        <option data-tokens="none">-- Select the activity --</option>
                                        <option data-tokens="37">Archery</option>
                                        <option data-tokens="31">Back country trekking</option>
                                        <option data-tokens="19">Backpacking</option>
                                        <option data-tokens="46">Baseball</option>
                                        <option data-tokens="36">Base jumping</option>
                                        <option data-tokens="32">Basketball</option>
                                        <option data-tokens="12">Boating</option>
                                        <option data-tokens="13">Bowling</option>
                                        <option data-tokens="29">Bungee Jumping</option>
                                        <option data-tokens="11">Camping</option>
                                        <option data-tokens="25">Caving</option>
                                        <option data-tokens="44">Crossfit</option>
                                        <option data-tokens="48">Cycling</option>
                                        <option data-tokens="38">Firing range</option>
                                        <option data-tokens="20">Fishing</option>
                                        <option data-tokens="33">Football</option>
                                        <option data-tokens="5">Frisbee</option>
                                        <option data-tokens="6">Gardening</option>
                                        <option data-tokens="10">Golf</option>
                                        <option data-tokens="50">Gym group</option>
                                        <option data-tokens="30">Heli skiing</option>
                                        <option data-tokens="2">Hiking</option>
                                        <option data-tokens="23">Horseback Riding</option>
                                        <option data-tokens="22">Jet skiing</option>
                                        <option data-tokens="42">Kayaking</option>
                                        <option data-tokens="41">Kickball</option>
                                        <option data-tokens="16">Mountain biking</option>
                                        <option data-tokens="17">Nordic skiing</option>
                                        <option data-tokens="14">Paddle boarding</option>
                                        <option data-tokens="40">Paintball</option>
                                        <option data-tokens="28">Parasailing</option>
                                        <option data-tokens="43">Rafting</option>
                                        <option data-tokens="27">Rock Climbing</option>
                                        <option data-tokens="47">Running</option>
                                        <option data-tokens="26">Scuba Diving</option>
                                        <option data-tokens="7">Skiing</option>
                                        <option data-tokens="24">Skydiving</option>
                                        <option data-tokens="18">Snorkeling</option>
                                        <option data-tokens="8">Snowboarding</option>
                                        <option data-tokens="45">Soccer</option>
                                        <option data-tokens="9">Surfing</option>
                                        <option data-tokens="4">Swimming</option>
                                        <option data-tokens="15">Tennis</option>
                                        <option data-tokens="35">Volleyball</option>
                                        <option data-tokens="49">Walking</option>
                                        <option data-tokens="21">Water skiing</option>
                                        <option data-tokens="34">Weight lifting</option>
                                        <option data-tokens="3">Yoga</option>
                                        <option data-tokens="39">Zip lining</option>
                                    </select>
                                </div>

                                
                                <div class="form-group">
                                    <label for="outdoor-selection">Is this an outdoor event?</label>
                                    <select class="selectpicker border rounded" data-live-search="true" data-width="100%" id="outdoor-selection">
                                        <option data-tokens="none">-- Select yes or no --</option>
                                        <option data-tokens="y">Yes</option>
                                        <option data-tokens="n">No</option>
                                    </select>
                                </div>
                                                                
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="myButton glow-on-hover" data-dismiss="modal">Cancel</button>
                            <button type="button" class="myButton btn-success glow-on-hover" id="create-event">Create Event</button>
                        </div>
                    </div>
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