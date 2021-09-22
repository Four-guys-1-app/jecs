export default function Blog(props) {
    return `
            <div class="container" id="blog">
                <div class="d-flex flex-column flex-wrap align-content-center">
                    <header class="mt-1"><h1>Blog</h1></header>
                </div>
            </div>
            
            <div class="container m-1 ">
            
                    <div class="d-flex flex-direction: column" id="listoftypes">
                        <div class="w-25 border" id="typesList">
                        
                            
                                ${props.types.map(type => `
                                <h5 data-id="${type.id}" class="listTypes"><a href="#">${type.type}</a></h5>
                                `).join('')}
                            </div>
                
                    </div>
                
                    <div class="w-50 p-3 d-flex justify-content-center flex-wrap">
                        <div id="blogCards" class="container">
                
                        </div>
                
                    </div>
                
                    <div class="w-25 p-3"><p>Hello</p></div>
                
                
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
                        <div class="col-12 mt-3">
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
            "width": "300px",
            "margin-right": "0px"
        });

    });





}