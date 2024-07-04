var tl = gsap.timeline();

tl.from("#nav",{
    opacity:0,
    y:-30,
    duration:1

})
tl.from("#part2",{
    opacity:0,
    y:-30, 
    stagger:0.3
})


tl.from("h2",{
    opacity:0,
    y:-30, 
    stagger:0.3
})
tl.from("h3",{
    opacity:0,
    y:20,
    scale:0.2
})















// //To animate from initial to final point
// gsap.to(".abc", {
//     rotate: 360,
//     x:500,
//     y:500,
//     duration:2,
//     delay:2,
//     backgroundColor:"red ",
//     borderRadius:"0",
//     repeat:1,               //this property is use to repeat the animations if we put value -1 then it work infinite time
//     yoyo:true,              // YOYO property is use to animate like to and from both at a time 
// })
// //To animate final to initial point
// gsap.from("h1", {
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:1,               // Stagger is use to animate all elements one by one
//     repeat:-1,
// })


// // Know we learn about timeline it is use to animate element one after another once the 1st complete second comes to animate and vise versa

// var tl = gsap.timeline();


// tl.to(".box1",{
//     rotate:360,
//     x:600,
//     duration:2,
//     backgroundColor:"green",
// })
// tl.to(".box2",{
//     rotate:180,
//     x:600,
//     duration:2,
//     backgroundColor:"green",
//     borderRadius:"50%"
// })
// tl.to(".box3",{
//     rotate:90,
//     x:600,
//     duration:2,
//     backgroundColor:"green",
//     borderRadius:"50px"
// })