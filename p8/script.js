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

}, "-=0.3")             //control the delay in time line
tl.from("#section1bottom img",{
    y:30,
    opacity:0,
    stagger:0.3
})