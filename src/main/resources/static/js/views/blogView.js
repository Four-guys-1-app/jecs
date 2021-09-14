export default function Blog(props) {
    return `
    <div class="container" id="blog">
        <div class="d-flex flex-column flex-wrap align-content-center">
            <header class="mt-1"><h1>Blog</h1></header>
        </div>   
    </div>  
      
   `;

}

export function BlogEvent(){

    $(".appendBoi").append("<div id=\"bannerSpot\" class=\"container p-4\"></div>");

    $(document).ready(function() {

        const eventDiv = $("#typesList")
        const blogDiv = $("#blogCards")
        let apiUrl = `http://localhost:8080/api/eventTypes`
        let apiUrl2 = `http://localhost:8080/api/events/`



            const getTypes = async (element, url) => {
                const response = await fetch(url);
                const jsonRes = await response.json();
                console.log(jsonRes);

                element.append(jsonRes.map(event => `
                            <h5>${event.type}</h5>
                `).join(''))
            };


        const getCards = async (element, url) => {
            const response = await fetch(url);
            const jsonRes = await response.json();
            console.log(jsonRes);

            element.append( jsonRes.map(event => `
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 mt-3">
                            <div class="card" data-id="${event.user.id}">
                                <div class="d-flex card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img class="" src="http://via.placeholder.com/150x90" alt="Card image cap">
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">${event.title}</h4>
                                        <p class="card-text">${event.description}</p>
                                        <p class="card-text">Event created by: ${event.user.username}</p>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Activity: ${event.type.type}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `).join(''))
        }

        getCards(blogDiv, apiUrl2);
        getTypes(eventDiv, apiUrl);



    });

    const buildUrl = searchItem => {
        const baseUrl = `http://localhost:8080/api/events/`;
        let fetchUrl;

        const typePatt = /[\s\S]{1,255}/;

        switch (true){
            case typePatt.test(searchItem):
                fetchUrl = baseUrl + `type?type=${searchItem}`;

            default:
                console.log("the search not valid.")
        }

    $("#submitType").click(function ()  {
        const searchInput = $("#typeSelection")
        const eventDiv = $("#blogCards")

        if (searchInput.val() === "") {
            alert("Please enter a search value to proceed...");
            return;
        } else if (searchInput.val().length > 255) {
            alert("You have entered too many characters.  Please try again.");
            return;
        }

        let apiUrl = buildUrl(searchInput.val());

        eventDiv.empty();
        getCards(eventDiv, apiUrl);

    })

    }

        $(".appendBoi").append(`<div class="container">
            <div class="d-flex flex-direction: column">
               <div class="w-25 p-3 ml-0" id="typesList">
                    <div class="form-group">
                          <label for="name-selection">Type Name</label>
                           <input type="text" class="form-control" id="typeSelection">
                           <input type="submit" id="submitType" value="Submit" class="btn btn-dark">
                     
               </div>
            </div>
            
            <div class="w-50 p-3 d-flex justify-content-center flex-wrap">
                    <div id="blogCards" class="container">
                        <p>hello</p>
                            
                    </div>
                
            </div>
               
            <div class="w-25 p-3"><p>Hello</p></div>
            
            
            </div>      
            </div>`);



}