

// script.js

// document.addEventListener('DOMContentLoaded', function() {
//     const sidebar = document.querySelector('.sidebar');
//     const toggleButton = document.getElementById('toggleSidebar');
  
//     let isSidebarOpen = false;
  
//     menuBar.addEventListener('click', function() {
//       if (isSidebarOpen) {
//         gsap.to(sidebar, { x: '100%', duration: 0.5, ease: 'power2.out' });
//       } else {
//         gsap.to(sidebar, { x: '0%', duration: 0.5, ease: 'power2.out' });
//       }
//       isSidebarOpen = !isSidebarOpen;
//     });
//   });



  
// mm1.add("(max-width:750px)",()=>{
  
//     tl1.to(".section1 .sidebar",{
//         right:0,
//         // x:"0%",
//         delay:0.5,
//         duration:1,
//   ease:"power2.out"
//     })
    
//     tl1.from(".sidebar a",{
//         opacity:0,
//         x:150,
//         duration:1,
//         stagger:0.5,
//         ease:"power2.out"
//     })
//     tl1.from(".sidebar .close-bar",{
//         opacity:0,
//         y:-100,
//         duration:1,
//           ease:"power2.out"
//     })
    
//     tl1.pause();
    
//     menuBar.addEventListener("click",()=>{
//         tl1.play();
//     })
    
//     closeBar.addEventListener("click",()=>{
//         tl1.reverse()
//     })


   
   
// })


var tl=gsap.timeline();
tl.from(".section1 .sec1_left,.section1 .sec1_right a,.section1 .sec1_right i",{
    opacity:0,
    duration:1,
    delay:1,
    y:-50,
    stagger:0.3
})

tl.from(".section2 .sec2_left",{
    opacity:0,
    duration:1.5,
    x:-100
})
tl.from(".section2 .sec2_right",{
    opacity:0,
    duration:1.5,
    x:100
})

tl.from(".section3 .sec3_left",{
    opacity:0,
    x:-100,
    duration:1.5,
    scrollTrigger:{
        trigger:".section3 .sec3_left",
        scroller:"body",
    start:"top 80%",
    end:"top 30%",
    scrub:2
    }
})
tl.from(".section3 .sec3_right",{
    opacity:0,
    x:100,
    duration:1.5,
    scrollTrigger:{
        trigger:".section3 .sec3_right",
        scroller:"body",
    start:"top 80%",
    end:"top 30%",
    scrub:2
    }
})

tl.from(".section4 .sec4_img",{
    opacity:0,
    x:-100,
    duration:1.5,
    scrollTrigger:{
        trigger:".section4 .sec4_img",
        scroller:"body",
    start:"top 80%",
    end:"top 40%",
    scrub:2
    }
})
tl.from(".section4 .sec4_right",{
    opacity:0,
    x:100,
    duration:1.5,
    scrollTrigger:{
        trigger:".section4 .sec4_right",
        scroller:"body",
    start:"top 70%",
    end:"top 40%",
    scrub:2
    }
})

tl.from(".section5 .sec5_icons",{
    opacity:0,
    y:200,
    duration:1.5,
    stagger:0.15,
    scrollTrigger:{
        trigger:".section5 .sec5_icons",
        scroller:"body",
        start:"top 170%",
        end:"top 90%",
        scrub:2
    }
})


