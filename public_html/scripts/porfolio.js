class Project{
    name;
    image;
    description;
    areas;

    constructor(name, id, image, description, areas){
        this.name = name;
        this.id = id;
        this.image = image;
        this.description = description;
        this.areas = areas;
    }
}

let projects = [];
projects.push(new Project("CODENAMES CAST", 'codenames-cast', "icons/codenames-cast.png", 
"Codenames Cast is a social word/board-game played with a chromecast. The game is based on the offical Codenames board game. Codenames Cast is currently only playable on iOS and Web", 
["Swift", "Python", "Java", "Web"]));
projects.push(new Project("CODENAMES CAST", 'codenames-cast', "icons/codenames-cast.png", 
"Codenames Cast is a social word/board-game played with a chromecast. The game is based on the offical Codenames board game. Codenames Cast is currently only playable on iOS and Web", 
["Swift", "Web"]));
projects.push(new Project("CODENAMES CAST", 'codenames-cast', "icons/codenames-cast.png", 
"Codenames Cast is a social word/board-game played with a chromecast. The game is based on the offical Codenames board game. Codenames Cast is currently only playable on iOS and Web", 
["Swift", "Web"]));


function showPortfolio(area){

    p = []
    for(project of projects){
        if(project.areas.includes(area)){
            console.log(project.name)
            p.push(project)
        }
    }
    let slider = document.getElementById("portfolioGallery");
    slider.innerHTML="";
    for(project of p){
        portfolioProject = document.createElement("div")
        portfolioProject.className = "slide flex"

        let slideImage = document.createElement("div")
        slideImage.className = "slide-image slider-link prev"
        let img = document.createElement("img")
        img.src = project.image;
        slideImage.appendChild(img)

        portfolioProject.appendChild(slideImage)
    


        let content = document.createElement("div")
        content.className =  "slide-content"

        let title = document.createElement("div")
        title.className = "slide-title"
        title.innerHTML = project.name

        let description = document.createElement("div")
        description.className = "slide-description"
        description.innerHTML = project.description

        let more = document.createElement("div")
        more.className = "slide-more"
        let link = document.createElement("a")
        link.href = './projects/' + project.id
        link.innerHTML = "READ MORE"
        more.appendChild(link)

        content.appendChild(title)
        content.appendChild(description)
        content.appendChild(more)
        portfolioProject.appendChild(content)

        slider.appendChild(portfolioProject)




     
    }

}
( function($) {
  
  $(document).ready(function() {
    
    var s           = $('.slider'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        slide_title = s.find('.slide-title'),
        slide_text  = s.find('.slide-description'),
        slide_more  = s.find('.slide-more'),
        slide_image = s.find('.slide-image img'),
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    btn.on('click', function(e) {
      e.preventDefault();

      if( $(this).hasClass('next') ) {
        
        ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
      } else if ( $(this).hasClass('prev') ) {
        
        ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
      }
      TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


      //CONTENT ANIMATIONS

      var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
      var toProperties = {autoAlpha:0.8, x:'0', y:'0'};

      TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
      TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
      TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
      TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

    });
          
  });
})(jQuery);


showPortfolio("Swift")