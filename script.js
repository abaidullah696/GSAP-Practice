//To animate from initial to final point
gsap.to(".abc", {
    rotate: 360,
    x:500,
    y:500,
    duration:2,
    delay:2,
    backgroundColor:"red ",
    borderRadius:"0",
})
//To animate final to initial point
gsap.from("h1", {
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:1,               // Stagger is use to animate all elements one by one
})
//