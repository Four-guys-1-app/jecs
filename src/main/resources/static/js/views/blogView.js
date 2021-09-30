import {getHeaders} from "../auth.js";

export default function Blog(props) {
    return `
            <div>
            
                    <div class="d-flex flex-direction: column mt-6" id="listoftypes">
                        <div class="w-25 border" id="typesList">
                                           
                            <div class="my-custom-scrollbar my-custom-scrollbar-primary scrollbar-morpheus-den">
                                 ${props.types.map(type => `
                                    <h5 data-id="${type.id}" class="listTypes"><a href="#">${type.type}</a></h5>
                                    `).join('')}
                             </div>
                           
                    </div>
                
                    <div class="w-50 p-0 d-flex flex-direction: column">
                        <div id="blogCards" class="container">
                
                        </div>
                
                    </div>
                
                    <div class="w-25 p-0 d-flex flex-wrap justify-content-center border">
                    
                        <form>
                        <div class="d-flex row">
                            <div class="form-group">
                                <label for="blog-name">Event Name</label>
                                <input type="text" class="form-control" id="blog-name" placeholder="Event Title">
                            </div>
                            <div class="form-group">
                                <label for="blog-desc">Event Description</label>
                                <textarea type="text" rows="10" style="height:100%;"class="form-control" id="blog-desc" placeholder="Event Description"></textarea>
                           </div>
                        </div>   
                            </form>
                                 <button type="button" class="myButton glow-on-hover">Cancel</button>
                                    <button type="button" class="glow-on-hover" id="create-blog">
                                    Create Blog
                                    </button>
                    
                    </div>
                
                
                </div>    
      
   `;

}

export function BlogEvent(){

    $(document).ready(function() {

        const listTypes = $(`.listTypes`);

        listTypes.click(function () {
            const typeId = $(this).attr(`data-id`);
            const blogDiv = $("#blogCards");
            let apiUrl = `/api/blogs/postByType/${typeId}`;

            getCards(blogDiv, apiUrl);

        });


        const getCards = async (element, url) => {
            const response = await fetch(url);
            const jsonRes = await response.json();
            console.log(jsonRes);

            element.empty();

            element.append( jsonRes.map(post => `
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 mt-0">
                            <div class="card" data-id="${post.user.id}">
                                <div class="d-flex card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img class="" src="http://via.placeholder.com/150x90" alt="Card image cap">
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">${post.title}</h4>
                                        <p class="card-text">${post.body}</p>
                                        <p class="card-text">Event created by: ${post.user.username}</p>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Activity: ${post.type.type}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `).join(''))
        }


        $(`#listoftypes`).css({
            "overflow": "auto",
            "margin-top": "12em"
        });


        $(`.my-custom-scrollbar`).css({
            "position": "relative",
            "width": "auto",
            "height": "600px",
            "overflow": "auto",
        });


        var myCustomScrollbar = document.querySelector('.my-custom-scrollbar');
        var ps = new PerfectScrollbar(myCustomScrollbar);

        var scrollbarY = myCustomScrollbar.querySelector('.ps__rail-y');

        myCustomScrollbar.onscroll = function () {
            scrollbarY.style.cssText = `top: ${this.scrollTop}px!important; height: 400px; right: ${-this.scrollLeft}px`;
        }


        const createBlog = $(`#create-blog`)

        createBlog.click(function () {

         let blogName = $(`#blog-name`).val();
            console.log(blogName)
         let blogDesc = $(`#blog-desc`).val();

            let thisDate = new Date(Date.now()).toISOString()

         let blogObj = {
             title: blogName,
             body: blogDesc,
             dateCreated: {thisDate},
             type: {
                 id: 5
             },
             user: {
                 id: 9
             }

         }
            console.log(blogObj)

        if (createBlogFetch(blogObj)) {
            $("#blog-name").val("");
            $("#blog-desc").val("");

            $("#alert-content").text("Event has been created.");
            $("#success-alert").slideDown(1000).delay(1000).slideUp(500);

        }

        })

        const createBlogFetch = async (blogObj) => {
            const settings = {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(blogObj)
            };

            const fetchResponse = await fetch("/api/blogs/create", settings);
            const data = await fetchResponse.json();
            console.log(data);
            console.log(`Event ${blogObj.title} was created successfully`);
        }

});





}