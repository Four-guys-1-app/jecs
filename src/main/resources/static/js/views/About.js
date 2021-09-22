export default function About(props) {
   return `
   <div class="container" id="aboutUs">
        <div class="d-flex flex-column flex-wrap align-content-center">
            <header class="mt-1"><h1>About us</h1></header>
        </div>   
    </div>   
   `;

}

export function AboutEvent() {
   $(".appendBoi").append("<div id=\"bannerSpot\" class=\"container p-4\"></div>");

   $(".appendBoi").append(`<div class="container">
        <div class="d-flex flex-direction: column ">
           <div class="w-25 p-3"><p>Hello</p></div>
           <div class="w-50 p-3 d-flex justify-content-center flex-wrap">
           <h1>Founders</h1>
           <div id="pictures" class="container">
            <div><img src="/assets/erik.jpg" alt="Erik"></div>
            <img src="/assets/erik.jpg">
            <img src="/assets/erik.jpg">
            <img src="/assets/erik.jpg">
           <div id="aboutUs" class="container">
                <p>Bacon ipsum dolor amet sausage beef ribs beef rump boudin jowl ham. Capicola pancetta ground round tenderloin rump. Sausage flank alcatra picanha strip steak turkey jerky boudin drumstick shoulder brisket pastrami beef. Pastrami meatball beef ribs, doner filet mignon sirloin pancetta bresaola porchetta leberkas. Sirloin pastrami sausage beef ribs pig. Landjaeger sirloin pig, porchetta swine boudin pork loin.
                
                Cow kevin doner brisket hamburger picanha pork pig sausage shank boudin alcatra drumstick. Ground round kevin tongue chislic frankfurter, porchetta pig brisket hamburger leberkas short ribs meatloaf. Boudin chuck burgdoggen andouille, chislic swine shoulder jowl hamburger rump tongue tail biltong. Corned beef frankfurter pig chislic fatback shankle brisket alcatra ham capicola swine hamburger pork loin salami landjaeger.
                
                Capicola swine sirloin tenderloin shankle ball tip beef ribs pastrami alcatra. Cow kevin jowl ribeye beef ribs porchetta. Tongue flank short loin tri-tip, chicken kielbasa leberkas. Pork chop swine ribeye shank pork loin.
                                
                </p>
            </div>
            </div>
           </div>
           
           <div class="w-25 p-3"><p>Hello</p></div>
        </div>      
        </div>`);

   $(".appendBoi").append(`
           <div class="container">
                <div class="d-flex justify-content-center flex-column align-items-center"> 
                    <div class="p-3"> <h3>Disclaimer</h3></div>
                    <div class="p-3"> <p>JECS</p></div>
                    <div class="p-3"> <h3>&copy; Footer</h3>   </div>
                </div>
            </div>
   `);


}