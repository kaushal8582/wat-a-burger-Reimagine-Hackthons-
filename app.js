// locomotive code 
(function () {
  var scroll = new LocomotiveScroll();
})();


function breakTheText() {
  let footerH1 = document.querySelector(".footer-anim h1")
  let footerH1Text = footerH1.textContent


  let splittedText = footerH1Text.split("")
  let halfValue = splittedText.length / 2


  let clutter = ""

  splittedText.forEach(function (elem, idx) {

    if (idx < halfValue) {
      clutter += `<span class="footerA">${elem}</span>`

    } else {
      clutter += `<span class="footerB">${elem}</span>`
    }
  })
  footerH1.innerHTML = clutter
}
breakTheText()



gsap.from(".footer-anim h1 .footerA", {
  y: -60,
  opacity: 0,
  duration: 0.4,
  delay: 0.1,
  stagger: 0.15,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    // markers:true,
    start: "140% 80%",
    end: "bottom top",
    scrub: 2
  }
})


gsap.from(".footer-anim h1 .footerB", {
  y: -60,
  opacity: 0,
  duration: 0.4,
  delay: 0.1,
  stagger: -0.15,
  scrollTrigger: {
    trigger: "#footer",
    scroller: "body",
    // markers:true,
    start: "140% 80%",
    end: "bottom top",
    scrub: 2
  }
})
gsap.from("#footer .footer-circle-logo img", {
  transform: "rotate(150deg)",
  duration: 4,
  scrollTrigger: {
    trigger: "#footer ",
    // scroller: "#footer",
    // markers:true,
    start: "65% 55%",
    end: "65% 25%",
    scrub: 2
  }
})




// review page animation

const reviewLeft = document.querySelector(".reviewBtnleft");
const reviewRight = document.querySelector(".reviewBtnRight");
const allReviewCard = document.querySelectorAll(".reviewcard");
let reviewIndex = 0;

function animateReview(direction) {
  const previousIndex = reviewIndex;
  const nextIndex = (reviewIndex + direction + allReviewCard.length) % allReviewCard.length;

  gsap.to(allReviewCard[previousIndex], {
    left: direction > 0 ? "125%" : "-24%",
    duration: 0.9,
  });

  gsap.to(allReviewCard[nextIndex], {
    zIndex: 9,
    duration: 0.9,
    // delay: 0.1
  });

  gsap.to(allReviewCard[previousIndex], {
    left: "50%",
    zIndex: 1,
    delay: 0.9
  });

  reviewIndex = nextIndex;
}

reviewRight.addEventListener("click", () => animateReview(1));
reviewLeft.addEventListener("click", () => animateReview(-1));

// food gallery

let gallery = gsap.timeline({
  scrollTrigger: {
      trigger: ".food-gallery",
      // markers: true,
      start: "150% 60%",
      end: "150% 10%",
      // pin: true,
      scrub: true
  }
})

gallery.to(".top-con h1", {
  rotateX: "100deg",
  opacity:0,
  duration:3,
  display:"none"
  // ease:"power1"
},"rc")

gallery.to(".center-con .upper", {
  rotateX: "100deg",
  opacity:0,
  duration:3,
  // ease:"power1"
},"rc")

gallery.to(".center-con .lower", {
  rotateX: "-100deg",
  opacity:0,
  duration:3,
  // ease:"power1"
},"rc")


gallery.to(".center-con .middle .middle-left", {                           
  rotateY:"-100deg",                                          
  opacity:0,
  duration:3,
  // ease:"power1"
},"rc")

gallery.to(".center-con .middle .middle-right", {                                                 
  rotateY:"100deg",        
  opacity:0,
  duration:3,
  // ease:"power1"
},"rc")

gallery.to(".middle-video", {
  width:"90vw",
  height:"90vh",
  duration:5,
},"rc")






// //VIDEO SECTION
// var vl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#video-section",
//     scroller: "body",
//     // markers:true,
//     start: "100% 130%",
//     end: "100% 80%",
//     scrub: 2,
//     duration: 2,
//     // pin:true,
//   }
// });
// vl.to("#video-section .video video", {
//   width: "90vw",
//   height: "90vh",
//   borderRadius: "20px"
// })

// let gallery = gsap.timeline({
//   scrollTrigger: {
//       trigger: ".gallery",
//       // markers: true,
//       start: "50% 50%",
//       end: "150% 50%",
//       pin: true,
//       scrub: true

//   }
// })


// gallery.to(".top-con h1", {
//   rotateX: "100deg",
//   opacity:0,
//   duration:1.5,
//   display:"none"
//   // ease:"power1"
// },"rc")

// gallery.to(".center-con .upper", {
//   rotateX: "100deg",
//   opacity:0,
//   duration:1.5,
//   // ease:"power1"
// },"rc")

// gallery.to(".center-con .lower", {
//   rotateX: "-100deg",
//   opacity:0,
//   duration:1.5,
//   // ease:"power1"
// },"rc")


// gallery.to(".center-con .middle .middle-left", {                                                                                           
//   rotateY: "-100deg",                                                                                                                                                                                                                                                                                                                                                                                                                                     
//   opacity:0,
//   duration:1.5,
//   // ease:"power1"
// },"rc")
// gallery.to(".center-con .middle .middle-right", {                                                                                           
//   rotateY: "100deg",                                                                                                                                                                                                                                                                                                                                                                                                                                     
//   opacity:0,
//   duration:1.5,
//   // ease:"power1"
// },"rc")

// gallery.to(".middle-video", {
//   width:"90vw",
//   height:"90vh",
//   duration:5,
// },"rc")





// locomotive code 



// nav animation

let nav = document.querySelector(".toggle");
let fullNav = document.querySelector(".full");

nav.onclick = function () {
  nav.classList.toggle("active");
  fullNav.classList.toggle("active");
  if (fullNav.classList.contains("active")) {
    gsap.to(".full", {
      // height: "100%",
      // width:"100%",
      right: "0",
      duration: 0.7
    });

    gsap.from(".full h4", {
      y: 100,
      duration: 0.6,
      stagger: 0.3,
      opacity: 0,
      // transform:"rotate(45deg)"
    });
  }
  else {
    gsap.to(".full", { right: "-70vw", duration: 1 });
  }
};

// temp page animation second page animation


// temp page big circle ke under small circle animation

let arr = [
  {
    "src": "images/BURGER.png",
    "deg": "45",
  },
  {
    "src": "images/icecream.jpg",
    "deg": "90",
  },
  {
    "src": "images/plate burger.png",
    "deg": "135",
  },
  {
    "src": "images/burger2.png",
    "deg": "180",
  },
  {
    "src": "images/coffe.png",
    "deg": "225",
  },
  {
    "src": "images/icecream.jpg",
    "deg": "270",
  },
  {
    "src": "images/palatable-chicken-with-spices.png",
    "deg": "315",
  },
  {
    "src": "images/burger 3.png",
    "deg": "360",
  }
]

const centerImg = document.querySelector(".centerimg img")
const tempBox = document.querySelector(".tempbox")
const rightBtn = document.querySelector(".rightbtn")
const leftbtn = document.querySelector(".leftbtn")
const temptexth4 = document.querySelectorAll(".temp-text1 h4")
const temptexth1 = document.querySelectorAll(".temp-text2 h1")

let index = 0;

function rotateRight() {
  centerImg.style.opacity = '0'
  temptexth1[index].style.top = '-100%'
  temptexth4[index].style.top = '-100%'
  index = (index + 1) % arr.length;
  if(index==0){
    temptexth1.forEach((temp)=>{
        temp.style.top = '100%'
    })
    temptexth4.forEach((temp)=>{
        temp.style.top = '100%'
    })
  }
  temptexth1[index].style.top = '0'
  temptexth4[index].style.top = '0'
  tempBox.style.transform = `translate(-50%,-50%) rotate(${arr[index].deg}deg)`
  setTimeout(() => {
    centerImg.style.opacity = '1'
    centerImg.src = arr[index].src;
  }, 220);
}
function rotateLeft() {
  centerImg.style.opacity = '0'
  temptexth1[index].style.top = '100%'
  temptexth4[index].style.top = '100%'
  index = (index - 1 + arr.length) % arr.length;
  if(index==7){
    temptexth1.forEach((temp)=>{
        temp.style.top = '-100%'
    })
    temptexth4.forEach((temp)=>{
        temp.style.top = '-100%'
    })
  }
   temptexth1[index].style.top = '0'
  temptexth4[index].style.top = '0'
  tempBox.style.transform = `translate(-50%,-50%) rotate(${arr[index].deg}deg)`
  setTimeout(() => {
    centerImg.style.opacity = '1'
    centerImg.src = arr[index].src;
  }, 1120);
}


// setInterval(() => {
//   // rotateRight()
//   // rotateLeft()
// }, 2000);



rightBtn.addEventListener("click", rotateRight)
leftbtn.addEventListener("click", rotateLeft)


// page page animtion third page animtion

let am = gsap.timeline({
  scrollTrigger: {
    trigger: ".page",
    // markers:true,
    start: "30% 80%",
    end: "30% 45%",
    scrub: 1,
  },
})
am.to(".text-hover .first", {
  width: "100%",
})
am.to(".text-hover .second", {
  width: "100%",
})
am.to(".text-hover .third", {
  width: "100%",
})

// our seccreate page animtion page four

// our secreate recipe page animation

let recipeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#ourSecretRecipe",
    start: "top 80%",
  }
});

recipeTimeline
  .from(".yellowbox", { y: "200%" })
  .from(".yellowbox img", { scale: 0.5, start: "top 50%" }, "<") // "<" starts this animation at the same time as the previous one
  .from(".recipecard1", { scale: 0, left: "50%", start: "top 40%" }, "<")
  .from(".recipecard4", { scale: 0, left: "50%", start: "top 40%" }, "<");

// Create another timeline for the animations with different start positions
let recipeTimeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ourSecretRecipe",
    start: "top -20%"
  }
});

recipeTimeline2
  .from(".recipecard2", { scale: 0, left: "50%" })
  .from(".recipecard3", { scale: 0, left: "50%" }, "<");


// burgeranition page fifth page

// burgeranimation page
let burgerpageTimeline = gsap.timeline({
  scrollTrigger: {
    start: "50% 50%",
    end: "bottom top",
    // markers:true,
    scrub: true,
    trigger: "#burgeranimation",
    pin: true,
  }
})

gsap.from(".burgerimg", {
  top: "100%",
  scrollTrigger: {
    trigger: "#burgeranimation",
    start: "30% 50%",
    end: "50% 50%",
    // markers:true,
    scrub: true

  }
})

burgerpageTimeline.from(".bi", {
  top: "50%",
  left: "50%",
  duration: 2,
  zindex: -1,
  scale: 0
}, "a")

burgerpageTimeline.from("#burgeranimation h1", {
  top: "50%",
  left: "50%",
  opacity: 0,
  scale: 0
}, "a")

// menu page animtion page sixth 

const allTextP = document.querySelectorAll(".textp")
allTextP.forEach((text) => {
  const textcontent = text.textContent
  const splitedText = textcontent.split("");
  let clutter = ''
  splitedText.forEach((e) => {
    if (e == " ") {
      e = "-"
    }
    clutter += `<span class="a" >${e}</span>`
  })

  text.innerHTML = clutter
})

const createAnimation = (selector, properties, scrollTrigger) => {
  gsap.from(selector, {
    ...properties,
    scrollTrigger: {
      trigger: ".menu",
      scrub: true,
      ...scrollTrigger
    }
  });
};

// Text animations
createAnimation(".textp.first span", { opacity: 0, stagger: 0.1 }, { start: "10% 50%", end: "50% 90%" });
createAnimation(".textp.second span", { opacity: 0, stagger: 0.1 }, { start: "30% 50%", end: "50% 90%" });
createAnimation(".textp.third span", { opacity: 0, stagger: 0.1 }, { start: "60% 50%", end: "80% 90%" });
createAnimation(".textp.fourth span", { opacity: 0, stagger: 0.1 }, { start: "80% 70%", end: "90% 60%" });

// Image animations
createAnimation(".firstImg", { rotate: 90, stagger: 0.1 }, { start: "10% 50%", end: "50% 90%" });
createAnimation(".secondImg", { rotate: 90, stagger: 0.1 }, { start: "30% 50%", end: "50% 40%" });
createAnimation(".thirdImg", { rotate: 90, stagger: 0.1 }, { start: "60% 50%", end: "80% 70%" });
createAnimation(".fourthImg", { rotate: 90, stagger: 0.1 }, { start: "80% 70%", end: "90% 50%" });

// smoke or salt img animation
createAnimation(".saltimg img", { x: "-100%" }, { start: "10% 50%", end: "50% 90%" })
createAnimation(".saltimg1 img", { x: "-100%" }, { start: "40% 50%", end: "50% 20%" })


