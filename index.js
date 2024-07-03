const slides = document.querySelectorAll(".slide")
var counter = 0;
 console.log(slides)

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    slideimage()
}


const goNext = () => {
    counter++
    if(counter >= slides.length){
        counter = 0;
    }
    slideimage()
}

function autoslider(){
    deletInterval = setInterval(timer, 10000);
    function timer(){
        goNext();
    }
}
autoslider();

const slideimage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}