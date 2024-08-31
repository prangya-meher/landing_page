var tl=gsap.timeline();


tl.from(".back_text h1",{
    opacity:0,
    duration:1,
    delay:0.2,
    x:-100,
    stagger:0.4
})

tl.from(".section1 .sec1_left,.section1 .sec1_right a,.section1 .sec1_right i",{
    opacity:0,
    duration:1,
    y:-50,
    stagger:0.3
})
