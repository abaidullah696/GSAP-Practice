gsap.to("#page2 h1",{
    transform:"translateX(-190%)",          // animate the text -190 %
    scrollTrigger:{
        trigger:"#page2",                   //when we use pin property we call parent div
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
}
)





















// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })
// gsap.from("#page2 h1",{
//     scale:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{           // Scroll trigger is used to animate the element when we come to that element
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         scrub:2                 // scrub is used to play animation acording to scroling and if we scrol reverse  the animation reverse as well
//     }
// })
//     gsap.from("#page2 h2",{
//         scale:0,
//         duration:2,
//         x:-500,
//         scrollTrigger:{           // Scroll trigger is used to animate the element when we come to that element
//             trigger:"#page2 h2",
//             scroller:"body",
//             markers:true,
//             start:"top 50%",
//             scrub:2
//         }
//     })