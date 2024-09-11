const header =  document.querySelector("header");
const menus =  document.querySelector(".menus");
const sliders = document.querySelectorAll(".slide");
const SliderContentEL = document.querySelectorAll(".slider-content")
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// window.addEventListener('scroll',()=>{
//     if(document.documentElement.scrollTop > 20){
//         menus.classList.add("sticky");
//     }else{
//         menus.classList.remove("sticky");
//     }
// });

let activeSlide = 1;

function setBgbody(){
    header.style.backgroundImage = sliders[activeSlide].style.backgroundImage;
}
setBgbody();

function setActiveSlide(){
    sliders.forEach((slides) => slides.classList.remove("active"));
    sliders[activeSlide].classList.add('active');
}

function setContent(){
    SliderContentEL.forEach((slidersContents) => {
        slidersContents.classList.remove("active");
    });
    SliderContentEL[activeSlide].classList.add("active");
    console.log(SliderContentEL)
}

rightBtn.addEventListener('click', () => {
    nextSlide();
    setBgbody();
    setActiveSlide();
    setContent();
});

leftBtn.addEventListener('click', () => {
    previousSlide();
    setBgbody();
    setActiveSlide();
    setContent();
})

function nextSlide(){
    activeSlide++;
    if(activeSlide > sliders.length -1){
        activeSlide = 0;
    }

}

function previousSlide(){
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = sliders.length -1;
    }
}

setInterval (() => {
    nextSlide()
    setBgbody();
    setActiveSlide();  
    setContent();
},7000)