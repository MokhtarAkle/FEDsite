// JavaScript Document
var menuDisplay = document.querySelector(".hamMenu");
var hamClick = document.querySelector(".menuImage");
var menuHider = document.querySelector(".hamMenu1");
var classwitch = document.querySelector(".newtester");
var classwitch1 = document.querySelector(".toptester");
var classwitch2 = document.querySelector(".poptester");
var classwitch3 = document.querySelector(".specialtester");
var slideRight = document.querySelector(".rightslider");
var slideLeft = document.querySelector(".leftslider");
var slider = document.querySelector(".scrollbar");
var slidePosition = 0;
var sceneSwitch = document.querySelector(".newandtrending");
var sceneSwitch1 = document.querySelector(".topsellers");
var sceneSwitch2 = document.querySelector(".popular");
var sceneSwitch3 = document.querySelector(".specials");
var playVideo = document.querySelector(".playbutton");
var playVideo1 = document.querySelector(".playbutton1");
var playVideo2 = document.querySelector(".playbutton2");
var playVideo3 = document.querySelector(".playbutton3");
var playVideo4 = document.querySelector(".playbutton4");
var playVideo5 = document.querySelector(".playbutton5");
var videoTest = document.querySelector(".videotest");
var videoTest1 = document.querySelector(".videotest1");
var videoTest2 = document.querySelector(".videotest2");
var videoTest3 = document.querySelector(".videotest3");
var videoTest4 = document.querySelector(".videotest4");
var videoTest5 = document.querySelector(".videotest5");
var checkVideo = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2); /* Source: https://stackoverflow.com/a/6877530 */

function displayHam() {
        menuDisplay.classList.remove("hamMenu");
        menuDisplay.classList.add("hamMenu1");
        
}


hamClick.addEventListener("click", function clickAway(){
    displayHam();
    setTimeout(hideSide, 500);
});

function removeside (event){
    if (event.target != menuDisplay){
        menuDisplay.classList.remove("hamMenu1");
        menuDisplay.classList.add("hamMenu");
        console.log(menuDisplay.classList);
    }
}

function removeEvent(){
    document.removeEventListener("click", removeside);
}

function hideSide(){
    if (menuDisplay.classList == "hamMenu1"){
        document.addEventListener("click", removeside);
        
        setTimeout(removeEvent, 1000);
        
    }
}

classwitch.addEventListener("click", function(){
    classwitch.classList.remove("newtester");
    classwitch.classList.add("switchtest");
    classwitch1.classList.remove("switchtest");
    classwitch1.classList.add("newtester");
    classwitch2.classList.remove("switchtest");
    classwitch2.classList.add("newtester");
    classwitch3.classList.remove("switchtest");
    classwitch3.classList.add("newtester");
    slidePosition = 1;
    sceneSwitch.style.display = "flex";
    sceneSwitch.style.visibility = "visible";
    sceneSwitch1.style.display = "none";
    sceneSwitch2.style.display = "none";
    sceneSwitch3.style.display = "none";
    console.log(slidePosition);
});

classwitch1.addEventListener("click", function(){
    classwitch1.classList.remove("toptester");
    classwitch1.classList.add("switchtest");
    classwitch.classList.remove("switchtest");
    classwitch.classList.add("newtester");
    classwitch2.classList.remove("switchtest");
    classwitch2.classList.add("newtester");
    classwitch3.classList.remove("switchtest");
    classwitch3.classList.add("newtester");
    slidePosition = 2;
    sceneSwitch.style.visibility = "hidden";
    sceneSwitch1.style.display = "flex";
    sceneSwitch2.style.display = "none";
    sceneSwitch3.style.display = "none";
    console.log(slidePosition);
});

classwitch2.addEventListener("click", function(){
    classwitch2.classList.remove("poptester");
    classwitch2.classList.add("switchtest");
    classwitch.classList.remove("switchtest");
    classwitch.classList.add("newtester");
    classwitch1.classList.remove("switchtest");
    classwitch1.classList.add("newtester");
    classwitch3.classList.remove("switchtest");
    classwitch3.classList.add("newtester");
    slidePosition = 3;
    sceneSwitch.style.visibility = "hidden";
    sceneSwitch1.style.display = "none";
    sceneSwitch2.style.display = "flex";
    sceneSwitch3.style.display = "none";
    console.log(slidePosition);
});

classwitch3.addEventListener("click", function(){
    classwitch3.classList.remove("specialtester");
    classwitch3.classList.add("switchtest");
    classwitch.classList.remove("switchtest");
    classwitch.classList.add("newtester");
    classwitch1.classList.remove("switchtest");
    classwitch1.classList.add("newtester");
    classwitch2.classList.remove("switchtest");
    classwitch2.classList.add("newtester");
    slidePosition = 4;
    sceneSwitch.style.visibility = "hidden";
    sceneSwitch1.style.display = "none";
    sceneSwitch2.style.display = "none";
    sceneSwitch3.style.display = "flex";
    console.log(slidePosition);
});

slider.addEventListener("scroll", function(){
    if(slider.scrollLeft > 10){
        slideRight.style.display = "none";
        slideLeft.style.display = "block";
    }
    else{
        slideLeft.style.display = "none";
        slideRight.style.display = "block";
    }
})

slideRight.addEventListener("click", function(){
    if(slidePosition == 1){
        classwitch1.classList.remove("newtester");
        classwitch1.classList.add("switchtest");
        classwitch.classList.remove("switchtest");
        classwitch.classList.add("newtester");
        classwitch2.classList.remove("switchtest");
        classwitch2.classList.add("newtester");
        classwitch3.classList.remove("switchtest");
        classwitch3.classList.add("newtester");
        slidePosition = 2;
        sceneSwitch.style.visibility = "hidden";
        sceneSwitch1.style.display = "flex";
        sceneSwitch2.style.display = "none";
        sceneSwitch3.style.display = "none";
        console.log(slidePosition);
    }
    else if(slidePosition == 2){
        classwitch2.classList.remove("newtester");
        classwitch2.classList.add("switchtest");
        classwitch.classList.remove("switchtest");
        classwitch.classList.add("newtester");
        classwitch1.classList.remove("switchtest");
        classwitch1.classList.add("newtester");
        classwitch3.classList.remove("switchtest");
        classwitch3.classList.add("newtester");
        slidePosition = 3;
        sceneSwitch.style.visibility = "hidden";
        sceneSwitch1.style.display = "none";
        sceneSwitch2.style.display = "flex";
        sceneSwitch3.style.display = "none";
        console.log(slidePosition);
    }
    else if(slidePosition == 3){
        classwitch3.classList.remove("newtester");
        classwitch3.classList.add("switchtest");
        classwitch.classList.remove("switchtest");
        classwitch.classList.add("newtester");
        classwitch1.classList.remove("switchtest");
        classwitch1.classList.add("newtester");
        classwitch2.classList.remove("switchtest");
        classwitch2.classList.add("newtester");
        slidePosition = 4;
        sceneSwitch.style.visibility = "hidden";
        sceneSwitch1.style.display = "none";
        sceneSwitch2.style.display = "none";
        sceneSwitch3.style.display = "flex";
        console.log(slidePosition);
    }
    else if(slidePosition == 4){
        classwitch.classList.remove("newtester");
        classwitch.classList.add("switchtest");
        classwitch1.classList.remove("switchtest");
        classwitch1.classList.add("newtester");
        classwitch2.classList.remove("switchtest");
        classwitch2.classList.add("newtester");
        classwitch3.classList.remove("switchtest");
        classwitch3.classList.add("newtester");
        slidePosition = 1;
        sceneSwitch.style.display = "flex";
        sceneSwitch.style.visibility = "visible";
        sceneSwitch1.style.display = "none";
        sceneSwitch2.style.display = "none";
        sceneSwitch3.style.display = "none";
        console.log(slidePosition);
    }
})

slideLeft.addEventListener("click", function(){
    if(slidePosition == 1){
        classwitch3.classList.remove("newtester");
        classwitch3.classList.add("switchtest");
        classwitch.classList.remove("switchtest");
        classwitch.classList.add("newtester");
        classwitch1.classList.remove("switchtest");
        classwitch1.classList.add("newtester");
        classwitch2.classList.remove("switchtest");
        classwitch2.classList.add("newtester");
        slidePosition = 4;
        sceneSwitch.style.visibility = "hidden";
        sceneSwitch1.style.display = "none";
        sceneSwitch2.style.display = "none";
        sceneSwitch3.style.display = "flex";
        console.log(slidePosition);
    }
    else if(slidePosition == 2){
        classwitch.classList.remove("newtester");
        classwitch.classList.add("switchtest");
        classwitch1.classList.remove("switchtest");
        classwitch1.classList.add("newtester");
        classwitch2.classList.remove("switchtest");
        classwitch2.classList.add("newtester");
        classwitch3.classList.remove("switchtest");
        classwitch3.classList.add("newtester");
        slidePosition = 1;
        sceneSwitch.style.display = "flex";
        sceneSwitch.style.visibility = "visible";
        sceneSwitch1.style.display = "none";
        sceneSwitch2.style.display = "none";
        sceneSwitch3.style.display = "none";
        console.log(slidePosition);
    }
    else if(slidePosition == 3){
        classwitch1.classList.remove("newtester");
        classwitch1.classList.add("switchtest");
        classwitch.classList.remove("switchtest");
        classwitch.classList.add("newtester");
        classwitch2.classList.remove("switchtest");
        classwitch2.classList.add("newtester");
        classwitch3.classList.remove("switchtest");
        classwitch3.classList.add("newtester");
        slidePosition = 2;
        sceneSwitch.style.visibility = "hidden";
        sceneSwitch1.style.display = "flex";
        sceneSwitch2.style.display = "none";
        sceneSwitch3.style.display = "none";
        console.log(slidePosition);
    }
    else if(slidePosition == 4){
        classwitch2.classList.remove("newtester");
        classwitch2.classList.add("switchtest");
        classwitch.classList.remove("switchtest");
        classwitch.classList.add("newtester");
        classwitch1.classList.remove("switchtest");
        classwitch1.classList.add("newtester");
        classwitch3.classList.remove("switchtest");
        classwitch3.classList.add("newtester");
        slidePosition = 3;
        sceneSwitch.style.visibility = "hidden";
        sceneSwitch1.style.display = "none";
        sceneSwitch2.style.display = "flex";
        sceneSwitch3.style.display = "none";
        console.log(slidePosition);
    }
})

playVideo.addEventListener("click", function(){
    videoTest.play();
    playVideo.style.visibility = "hidden";
})

playVideo1.addEventListener("click", function(){
    videoTest1.play();
    playVideo1.style.visibility = "hidden";
})

playVideo2.addEventListener("click", function(){
    videoTest2.play();
    playVideo2.style.visibility = "hidden";
})

playVideo3.addEventListener("click", function(){
    videoTest3.play();
    playVideo3.style.visibility = "hidden";
})

playVideo4.addEventListener("click", function(){
    videoTest4.play();
    playVideo4.style.visibility = "hidden";
})

playVideo5.addEventListener("click", function(){
    videoTest5.play();
    playVideo5.style.visibility = "hidden";
})

videoTest.addEventListener("click", function(){
    if(checkVideo){
        videoTest.pause();
        playVideo.style.visibility = "visible";
    }
    else{
        videoTest.play();
    }
})

videoTest1.addEventListener("click", function(){
    if(checkVideo){
        videoTest1.pause();
        playVideo1.style.visibility = "visible";
    }
    else{
        videoTest1.play();
    }
})

videoTest2.addEventListener("click", function(){
    if(checkVideo){
        videoTest2.pause();
        playVideo2.style.visibility = "visible";
    }
    else{
        videoTest2.play();
    }
})

videoTest3.addEventListener("click", function(){
    if(checkVideo){
        videoTest3.pause();
        playVideo3.style.visibility = "visible";
    }
    else{
        videoTest3.play();
    }
})

videoTest4.addEventListener("click", function(){
    if(checkVideo){
        videoTest4.pause();
        playVideo4.style.visibility = "visible";
    }
    else{
        videoTest4.play();
    }
})

videoTest5.addEventListener("click", function(){
    if(checkVideo){
        videoTest5.pause();
        playVideo5.style.visibility = "visible";
    }
    else{
        videoTest5.play();
    }
})