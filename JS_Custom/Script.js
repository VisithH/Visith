var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
  loader.style.display = "none";
  
});

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
// let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value + 0.25 + 'px';
})


let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 93;
let speed = 10;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `Fluent`;
    progressBar.style.background = `conic-gradient(
      #F9E400FF ${progressValue * 3.6}deg,
      #150233 ${progressValue * 3.6}deg
  )`;
    if (progressValue === progressEndValue) {
        clearInterval(progress);
    }
}, speed);

let progressBar2 = document.querySelector(".circular-progress2");
let valueContainer2 = document.querySelector(".value-container2");

let progressValue2 = 0;
let progressEndValue2 = 99;
let speed2 = 10;

let progress2 = setInterval(() => {
    progressValue2++;
    valueContainer2.textContent = `Native`;
    progressBar2.style.background = `conic-gradient(
      #F9E400FF ${progressValue2 * 3.6}deg,
      #150233 ${progressValue2 * 3.6}deg
  )`;
    if (progressValue2 === progressEndValue2) {
        clearInterval(progress2);
    }
}, speed);

// ScrollReveal().reveal('.body2')

const revealSection = document.querySelector('.reveal-section');
const revealPosition = revealSection.offsetTop;
const windowHeight = window.innerHeight;

function reveal() {
    if (window.scrollY >= revealPosition - windowHeight / 2) {
      revealSection.style.opacity = 1;
    }
  }
  
  window.addEventListener('scroll', reveal);
  