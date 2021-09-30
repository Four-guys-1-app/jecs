export default function About(props) {
   return `
    <div class="p-5"></div>
    
   <div class="container ">
        <div class="d-flex flex-direction: column " id="about-col">
           <div class="w-25 p-3"><p></p></div>
           <div class="w-50 p-3 d-flex justify-content-center flex-wrap">
           <h1>Founders</h1>
           <div id="pictures" class="container d-flex justify-content-center flex-wrap border">
            <div>
            <img class="bootiful" src="https://ca.slack-edge.com/T029BRGN0-U01TTFW0KRC-44bc1b5dbcd3-512" alt="Erik"></div>
            <img class="bootiful" src="https://ca.slack-edge.com/T029BRGN0-U01TX71ELMB-fed27c6f86c4-512"  alt="Joshua">
            <img class="bootiful" src="https://ca.slack-edge.com/T029BRGN0-U01UD3EV1DX-3e0cc159cb79-192" alt="Sean">
            <img class="bootiful" src="https://ca.slack-edge.com/T029BRGN0-U01UQ3HHQKA-3f318d07a4b5-192" alt="Christopher">
           <div id="aboutUs" class="container mt-5">
                <p>A couple of veteran bois creating an app to get swole.
                                
                </p>
            </div>
            </div>
           </div>
           
           <div class="w-25 p-3"><p></p></div>
        </div>      
        </div> 
   `;

}

export function AboutEvent() {

   $(`.bootiful`).css({
      "width": "11em",
      "height": "11em",
      "margin": "1px"
   })

}