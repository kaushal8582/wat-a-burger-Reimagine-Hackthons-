
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
    start: "65% 85%",
    end: "65% 85%",
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




//VIDEO SECTION
var vl = gsap.timeline({
  scrollTrigger: {
    trigger: "#video-section",
    scroller: "body",
    // markers:true,
    start: "100% 130%",
    end: "100% 80%",
    scrub: 2,
    duration: 2,
    // pin:true,
  }
});
vl.to("#video-section .video video", {
  width: "90vw",
  height: "90vh",
  borderRadius: "20px"
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
Shery.imageEffect(".img", {
  style: 4,
  debug: true,
});


