let slideshow = document.querySelector(".slideshow");
const imgs = document.querySelectorAll("[id='images']")

const xsZard =document.getElementById("ipxZard");

// console.log(imgs.length -1)
let x = 0;

function show(){
    x++
    slideshow.style.transition= "1s";
    // console.log("adade x" , x);

    if( x > imgs.length -1 ){
        x=0;
        slideshow.style.right = "1rem" 
        slideshow.style.transition= "0s";

    }
   
    slideshow.style.transform = `translateX( ${-x * 23.5}rem)`;

}

setInterval(show,2000);

function opacity(){

    for(let i=0 ; i<imgs.length  ; i++){
       
        imgs[x].style.opacity = "1";
        // console.log("x",x)

        if( x !== 0){
            imgs[x-1].style.opacity = "0.2";
            
        }else {
            imgs[x+3].style.opacity = "0.2";
      
        }

    }
  
}
setInterval(opacity,2000)

// iphone xs zard video play

let firstVideo = document.getElementById("video-zard")

xsZard.addEventListener("click",()=>{
    console.log("ohohoho")
    firstVideo.play();
    firstVideo.style.display = "block"
    setInterval(()=>{

        firstVideo.style.display = "none"

    },24000)
})

// BAR height change on scroll
let header = document.querySelector(".header");
let logoIMG = document.getElementById("logoIMG");
let headerUl = document.querySelector(".headerUl");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 10 ){
        header.style.height = "4vh";
        logoIMG.style.height = "60%";
        logoIMG.style.top = "-0.5rem";
        
        logoIMG.style.width = "50px";
        headerUl.style.height = "4vh";
        
    }else{
        logoIMG.style.top = "0rem";
        header.style.height = "10vh";
        logoIMG.style.height = "80%";
        logoIMG.style.width = "100px";
        headerUl.style.height = "10vh";

    }
}