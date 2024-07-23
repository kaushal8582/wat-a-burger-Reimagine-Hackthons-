// locomotive code 
(function () {
  var scroll = new LocomotiveScroll();
})();


let nav = document.querySelector(".toggle");
let fullNav = document.querySelector(".full");

nav.onclick = function () {
  nav.classList.toggle("active");
  fullNav.classList.toggle("active");
  if (fullNav.classList.contains("active")) {
    gsap.to(".full", {
      opacity:1,
      duration: 1,
      right:"1vw"
    });
    gsap.from(".full h4",{
      rotateX:"30deg",
      stagger:0.2,
    })
    gsap.from(".full h4",{
        opacity:1,
        duration:1,
        stagger:0.5
    })
    }
  else {
    gsap.to(".full",{ opacity:0, duration: 1,right:"-30vw"});
  }
};


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

  
  
// our secreate recipe page animation

let recipeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#ourSecretRecipe",
    start: "top 70%",
    end:"top 0%",
    // markers:true,
    scrub:2,
  }
});

recipeTimeline
  .from(".yellowbox", { height:0, opacity:0},"<")
  .from(".yellowbox img", { opacity:0, height:0 },"<") // "<" starts this animation at the same time as the previous one
  .from(".recipecard1", { opacity:0,left: "-20%",rotate:"60deg"},"<")
  .from(".recipecard2", { opacity:0,left: "-20%",rotate:"60deg"},"<")
  .from(".recipecard3", { opacity:0,right: "-20%",rotate:"-60deg"},"<")
  .from(".recipecard4", { opacity:0,right: "-20%" ,rotate:"-60deg"},"<")
  .from(".recipecard5", { opacity:0,right: "-20%",rotate:"-60deg"},"<")
  .from(".recipecard6", { opacity:0,left: "-20%",rotate:"60deg"},"<")

// Create another timeline for the animations with different start positions
let recipeTimeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ourSecretRecipe",
    start: "top -20%"
  }
});

recipeTimeline2
  // .from(".recipecard2", { scale: 0, left: "50%" })
  // .from(".recipecard3", { scale: 0, left: "50%" }, "<");




window.addEventListener("wheel", function (dets) {
  if (dets.deltaY > 0) {
      gsap.to(".marque", {
          transform: "translateX(-200%)",
          duration: 4,
          repeat: -1,
          ease: "none"
      })
      
  }else{
      gsap.to(".marque", {
          transform: "translateX(0)",
          duration: 4,
          repeat: -1,
          ease: "none"
      })
  }
})


let am = gsap.timeline({
  scrollTrigger:{
      trigger:".page",
      // markers:true,
      start:"30% 80%",
      end:"30% 45%",
      scrub:1,
  },
})
am.to(".text-hover .first",{
  width:"100%",
})
am.to(".text-hover .second",{
  width:"100%",
})
am.to(".text-hover .third",{
  width:"100%",
})


// Initialize Shery.js with the desired effect
Shery.imageEffect(".img1", {
  style: 5, // OR 5 for different variant
  // debug: true,
  gooey: true,
  config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8654174858165786},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":91}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
});
Shery.imageEffect(".img2", {
  style: 5, // OR 5 for different variant
  // debug: true,
  gooey: true,
  config: {"a":{"value":2,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8654174858165786},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":91}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
});




Shery.textAnimate(".sectionLeft h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});





const allBurgerTextH1First = document.querySelectorAll(".first-burger-texth1")

const allBurgerTextH1Second = document.querySelectorAll(".first-burger-text-2")


allBurgerTextH1First.forEach((elem)=>{
  const allFirstH1 = elem.querySelectorAll(".first-burger-texth1 h1")
  let firstBurgerTextIndex = 0
  document.querySelector(".img1").addEventListener("click", () => {
    gsap.to(allFirstH1[firstBurgerTextIndex], {
      top: "-100%",
      onComplete: function () {
        gsap.set(this._targets[0], { top: "100%" })
      }
    })
  
    if (firstBurgerTextIndex === allFirstH1.length - 1) {
      firstBurgerTextIndex = 0;
    } else firstBurgerTextIndex++
  
    gsap.to(allFirstH1[firstBurgerTextIndex], {
      top: "5%"
    })
  
  })
})
allBurgerTextH1Second.forEach((elem)=>{
  const allFirstH1 = elem.querySelectorAll(".first-burger-text-2 h1")
  let firstBurgerTextIndex = 0
  document.querySelector(".img2").addEventListener("click", () => {
    gsap.to(allFirstH1[firstBurgerTextIndex], {
      top: "-100%",
      onComplete: function () {
        gsap.set(this._targets[0], { top: "100%" })
      }
    })
  
    if (firstBurgerTextIndex === allFirstH1.length - 1) {
      firstBurgerTextIndex = 0;
    } else firstBurgerTextIndex++
  
    gsap.to(allFirstH1[firstBurgerTextIndex], {
      top: "5%"
    })
  
  })
})

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




let gallery = gsap.timeline({
  scrollTrigger: {
      trigger: ".gallery",
      // markers: true,
      start: "50% 50%",
      end: "150% 50%",
      pin: true,
      scrub: true

  }
})


gallery.to(".top-con h1", {
  rotateX: "100deg",
  opacity:0,
  duration:1.5,
  display:"none"
  // ease:"power1"
},"rc")

gallery.to(".center-con .upper", {
  rotateX: "100deg",
  opacity:0,
  duration:1.5,
  // ease:"power1"
},"rc")

gallery.to(".center-con .lower", {
  rotateX: "-100deg",
  opacity:0,
  duration:1.5,
  // ease:"power1"
},"rc")


gallery.to(".center-con .middle .middle-left", {                                                                                           
  rotateY: "-100deg",                                                                                                                                                                                                                                                                                                                                                                                                                                     
  opacity:0,
  duration:1.5,
  // ease:"power1"
},"rc")
gallery.to(".center-con .middle .middle-right", {                                                                                           
  rotateY: "100deg",                                                                                                                                                                                                                                                                                                                                                                                                                                     
  opacity:0,
  duration:1.5,
  // ease:"power1"
},"rc")

gallery.to(".middle-video", {
  width:"90vw",
  height:"90vh",
  duration:5,
},"rc")

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
    start: "65% 85%",
    end: "65% 85%",
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
    start: "70% 90%",
    end: "70% 70%",
    scrub: 2
  }
})
gsap.from("#footer .footer-circle-logo img", {
  transform: "rotate(150deg)",
  duration: 4,
  scrollTrigger: {
    trigger: "#footer .footer-circle-logo img",
    scroller: "body",
    // markers:true,
    start: "65% 90%",
    end: "65% 75%",
    scrub: 2
  }
})







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
Shery.imageEffect(".img", {
  style: 4,
  debug: true,
});




