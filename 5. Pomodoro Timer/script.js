
const startBtnElm = document.querySelector("#start");
const stopBtnElm = document.querySelector("#stop");
const resetBtnElm = document.querySelector("#reset");
const timeElm = document.querySelector("#timer");

let timeLeft;
let timeinMinute;
function askTime() {
    let time = prompt("Set your time in minutes");
    timeinMinute = time * 60;
    timeLeft = timeinMinute;
    let minute = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timeElm.innerText = `${minute.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
}

function updatetime() {
    let minute = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timeElm.innerText = `${minute.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
}

let interval;
function startTime() {
    if (timeLeft > 1) {
        interval = setInterval(() => {
            timeLeft--;
            updatetime();

            if (timeLeft === 0) {
                clearInterval(interval);
                alert("Time's up!");
                timeLeft = timeinMinute;
                updatetime();
            }
        }, 1000);
    } else {
        askTime();
    }
}

function stopTime() {
    clearInterval(interval);
}

function resetTime() {
    timeLeft = timeinMinute;
    updatetime();
    clearInterval(interval);
}

timeElm.addEventListener("dblclick", askTime);
startBtnElm.addEventListener("click", startTime);
stopBtnElm.addEventListener("click", stopTime);
resetBtnElm.addEventListener("click", resetTime);