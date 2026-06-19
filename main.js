let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let nouvil = document.querySelector(".nouvil");
let main = document.querySelector(".main");

window.addEventListener("scroll", () => {

    let value = window.scrollY;

    const isMobile = window.innerWidth <= 768;

    const moonSpeed = isMobile ? 1.8 : 3;
    const mountain3Speed = isMobile ? 1.2 : 1.8;
    const mountain4Speed = isMobile ? 1 : 1.5;
    const boatSpeed = isMobile ? 1.5 : 3;
    const maxFont = isMobile ? 40 : 67;

    stars.style.left = value + "px";

    moon.style.transform =
    `translateY(${80 + value * moonSpeed}px)`;

    mountains3.style.transform =
    `translateY(${value * mountain3Speed}px)`;

    mountains4.style.transform =
    `translateY(${value * mountain4Speed}px)`;

    river.style.transform =
    `translateY(${value}px)`;

    boat.style.transform =
    `translate(${value * boatSpeed}px, ${value}px)`;

    if(value < maxFont){
        nouvil.style.fontSize = value + "px";
    }else{
        nouvil.style.fontSize = maxFont + "px";
        nouvil.style.position = "fixed";
    }

    if(value >= (isMobile ? 250 : 351)){
        nouvil.style.display = "none";
    }else{
        nouvil.style.display = "block";
    }

    if(value >= 127){
        main.style.background =
        "linear-gradient(#376281,#10001f)";
    }else{
        main.style.background =
        "linear-gradient(#200016,#10001f)";
    }
});