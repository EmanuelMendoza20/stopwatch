const playButton = document.getElementsByClassName("play")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const clearButton = document.getElementsByClassName("lap-clear-button")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const second = document.getElementsByClassName("sec")[0];
const mSecond = document.getElementsByClassName("msec")[0];
const minute = document.getElementsByClassName("minute")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outer-circle")[0];

let isPlay = false;
let secCounter = 0;
let sec;
let mSec;
let mSecCounter = 0;
let min;
let minCounter = 0;
let lapItem = 0;

const toggleButton = () => {
    lapButton.classList.remove("hidden")
    resetButton.classList.remove("hidden")
}

const play = () => {
    if(!isPlay) {
        playButton.innerHTML = "Pause";
        setTimeout(() => {
            bg.classList.add("animation-bg");
        }, 10);
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
        Toastify({

            text: "Started",
            gravity: "bottom",
            position: "center",
            style: {
                background: "#141414",
                color: "#cccccc",
                borderRadius: "8px",
                boxShadow: "none"
            },
            className: "custom-toast",
            duration: 1500
    
            
            }).showToast();
    } else {
        playButton.innerHTML = "Play";
        clearInterval(min);
        clearInterval(sec);
        clearInterval(mSec);
        isPlay = false;
        bg.classList.remove("animation-bg");

        Toastify({

            text: "Paused",
            gravity: "bottom",
            position: "center",
            style: {
            background: "#141414",
            color: "#cccccc",
            borderRadius: "8px",
            boxShadow: "none"
            },
            className: "custom-toast",
            duration: 1500
    
            
            }).showToast();
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

    Toastify({

        text: "Reset",
        gravity: "bottom",
        position: "center",
        style: {
            background: "#141414",
            color: "#cccccc",
            borderRadius: "8px",
            boxShadow: "none"
        },
        className: "custom-toast",
        duration: 1500

        
        }).showToast();

}

const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span")
    
    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp");

    number.innerHTML = `#${++lapItem}`;
    timeStamp.innerHTML = `${minCounter}.${secCounter}.${mSecCounter}`;

    li.append(number, timeStamp);
    laps.append(li);

    //Borrar boton clear all si no hay laps
    clearButton.classList.remove("hidden");

    Toastify({

        text: "Lap created",
        gravity: "bottom",
        position: "center",
        style: {
            background: "#141414",
            color: "#cccccc",
            borderRadius: "8px",
            boxShadow: "none"
        },
        className: "custom-toast",
        duration: 1500

        
        }).showToast();
}

const clearAll = () => {
    laps.innerHTML = "";
    clearButton.classList.add("hidden")
    lapItem = 0;
    Toastify({

        text: "Cleared",
        gravity: "bottom",
        position: "center",
        style: {
            background: "#942727",
            color: "#cccccc",
            borderRadius: "8px"
        },
        className: "custom-toast",
        duration: 1500

        
        }).showToast();
}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll)