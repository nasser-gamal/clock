let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")


setInterval(timer, 1000)

function timer() {

    const time = new Date(); 
    
    const getSec = time.getSeconds() / 60;
    const getMin = (getSec + time.getMinutes()) / 60;
    const getHou = (getMin + time.getHours()) / 12;

    setRota(hours, getHou);
    setRota(minutes, getMin);
    setRota(seconds, getSec);

}

function setRota(el, get) {
    el.style.setProperty("--rotation", get * 360);
} 
