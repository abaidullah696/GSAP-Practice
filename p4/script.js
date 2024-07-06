var main = document.querySelector("#main")
var curser = document.querySelector("#curser")
var image = document.querySelector("#image")



// Track mouse movment code
main.addEventListener("mousemove", function (dets) {
    gsap.to(curser, {
        x:dets.x,
        y:dets.y,
        duration:0.1,
        ease:"back.out"
    })
})


//Mouse enter code
image.addEventListener("mouseenter", function () {
    console.log("Hello")
    curser.innerHTML = "View More";
    gsap.to(curser, {
        scale:4,
        backgroundColor:"#ffffff8a"
    })
})


//Mouse leave code
image.addEventListener("mouseleave", function () {
    console.log("world")
    curser.innerHTML = "";
    gsap.to(curser, {
        scale:0,
        backgroundColor:"#fff"
    })
})