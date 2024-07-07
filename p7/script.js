function marqueAnimation() {
window.addEventListener("wheel", function (dets) {
    if (dets.deltaY>0) {
        gsap.to(".marque",{
            transform:"TranslateX(-200%)",
            repeat:-1,
            duration:4,
            ease:"none"
        })
        gsap.to(".marque img", {
            rotate:180
        })
    } else {
        gsap.to(".marque",{
            transform:"TranslateX(0%)",
            repeat:-1,
            duration:4,
            ease:"none"
        })
        gsap.to(".marque img", {
            rotate:0
        })
    }
})
}
marqueAnimation()