function page1Animation() {
    var tl = gsap.timeline();

tl.from("nav h1, nav h2, nav button", {
    y:-30,
    duration:0.4,
    delay:0.1,
    opacity:0,
    stagger:0.3
})
tl.from("#cntr-left h1, #cntr-left p, #cntr-left button", {
    x:-30,
    opacity:0,
    stagger:0.3
})
tl.from("#cntr-right img", {
    opacity:0,
    x:200

}, "-=0.3")             //control the delay in time line
tl.from("#section1bottom img",{
    y:30,
    opacity:0,
    stagger:0.3
})
}

// page1Animation()

var tl2 = gsap.timeline({
    scrollTrigger: {
        scroller:"body",
        trigger: ".section2",
        markers: true,
        start: "top 50%", // Trigger animation when top of trigger element hits 50% of viewport height
        end:"top 80%",
        scrub: 2         // Scrub animation over 2 units of scroll
    }
});

tl2.from(".services h3", {
    y: -300,
    opacity: 0,
    duration: 1,
    delay: 2
});









// page1Animation()
// page2Animation()