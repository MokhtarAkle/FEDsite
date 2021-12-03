// JavaScript Document
var menuDisplay = document.querySelector(".hamMenu");
var hamClick = document.querySelector(".menuImage");
var menuHider = document.querySelector(".hamMenu1");

function displayHam() {
        menuDisplay.classList.remove("hamMenu");
        menuDisplay.classList.add("hamMenu1");
        
}



hamClick.addEventListener("click", displayHam);
function clickAway(){
    if (menuDisplay.classList.contains("hamMenu1")){
        document.addEventListener("click", function(event){
            var clickCheck = menuHider.contains(event.target);
            if (!clickCheck){
                menuDisplay.classList.remove("hamMenu1");
                menuDisplay.classList.add("hamMenu");
                console.log(clickAway());
            }
        })
    }
}


