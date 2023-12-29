const playButton = document.getElementsByClassName("play")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const second = document.getElementsByClassName("sec")[0];
const mSecond = document.getElementsByClassName("msec")[0];
const minute = document.getElementsByClassName("minute")[0];

let isPlay = false;
let secCounter = 0;
let sec;
let mSec;
let mSecCounter = 0;
let min;
let minCounter = 0;

const toggleButton = () => {
    lapButton.classList.remove("hidden")
    resetButton.classList.remove("hidden")
}

const play = () => {
    if(!isPlay) {
        playButton.innerHTML = "Pause";
        min = setInterval(() => {
            minute.innerText = `${++minCounter}.`;
        }, 60*1000)
        sec = setInterval(() => {
            if (secCounter === 60){
                secCounter = 0;
            }
            second.innerText = `${++secCounter}.`;
        }, 1000);
        mSec = setInterval(() => {
            if(mSecCounter === 100){
                mSecCounter = 0;
            }
            mSecond.innerText = ++mSecCounter;
        }, 10)
        isPlay = true;
    } else {
        playButton.innerHTML = "Play";
        clearInterval(min);
        clearInterval(sec);
        clearInterval(mSec);
        isPlay = false;
    }
    toggleButton();
    console.log(isPlay)
}

const reset = () => {
    lapButton.classList.add("hidden")
    resetButton.classList.add("hidden")
    playButton.innerHTML = "Play"
    minute.innerHTML = "0.";
    second.innerHTML = "0."
    mSecond.innerHTML = "0";
    //Resetear contadores
    secCounter = 0;
    mSecCounter = 0;
    minCounter = 0;

}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);