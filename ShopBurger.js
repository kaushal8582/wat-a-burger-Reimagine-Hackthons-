
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
