let progressBar = document.querySelector("circular-progress");
let valueContainer = document.querySelector("value-container");
let progressValue = 0;
let progressEndValue = 65;
let speed = 50;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = '${progressValue}%';
    if (progressValue === progressEndValue) {
        clearInterval(progress)
    }
})

