
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
