
var slides=["/assets/img/backgrounds/caruselimage2.png",
            "/assets/img/backgrounds/caruselimage4.png",
            "/assets/img/backgrounds/caruselimage1.png",
            "/assets/img/backgrounds/caruselimage5.png",
            "/assets/img/backgrounds/caruselimage3.png"
        ];
var slideIndex = 0;

function start(){
    showSlider(slides);
    changeSlide(0);
}


function showSlider(slides) {
    var sliderContent = document.querySelector('.slider-content');
    var slider = document.querySelector('.indexslider');

    /* display/slides holder */
    var display = document.createElement("div");
    display.setAttribute('class', 'display');

    /* dots/indicators controls holder */
    var dots = document.createElement("div");
        dots.setAttribute('class', 'dots');

    for (var i=0; i<slides.length; i++){
        var slide =  "<span class=\"slide\" style=\"background-image:url("+slides[i]+");\"></span>";
        var dot = "<span class=\"dot\" onclick=\"showDirect("+i+")\"></span>";
        display.innerHTML += slide;
        dots.innerHTML += dot;
    }
    slider.appendChild(display);
    sliderContent.appendChild(dots);
}


function changeSlide(n) {
    showDirect(slideIndex += n);
}

function showDirect(n) {
    slideIndex = n;
    var i, x = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if (n > x.length-1) slideIndex = 0;
    if (n < 0) slideIndex = x.length-1;
    for (i = 0; i <= x.length-1; i++) {
        x[i].style.display = "none";
        slideIndex===i ? dots[slideIndex].style.backgroundColor = "var(--link-color)": dots[i].style.backgroundColor = "rgba(0,0,0,0)"
    }
    x[slideIndex].style.display = "block";
}
