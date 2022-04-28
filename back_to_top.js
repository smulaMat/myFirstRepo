(function(){

    function createButton(){
    
        var button = document.createElement("button");
    
        button.classList.add("backToTop", "hidden");
        document.body.appendChild(button);
        button.textContent = "Back to Top"
    
        return button;
    
    }
    
    var button = createButton();
    
    function animateScroll() {
       
        if(document.documentElement.scrollTop > 0){
         window.scrollBy(0, document.documentElement.scrollTop*(-0.1))
         setTimeout(animateScroll, 20)    
     }
     
     }
    
    button.addEventListener("click", function (e) {
        
        e.stopPropagation();
    
        animateScroll();
    
        }, false)
    
    window.addEventListener("scroll", function(e) {
        
        if(document.documentElement.scrollTop >= 100){
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden")
        }
    
    },false)
    
    })(); 

    console.log('Siema Heniu!')