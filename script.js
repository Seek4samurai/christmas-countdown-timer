//Constants--------------------------------------------
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minsElement = document.getElementById("mins");
const secondsElement = document.getElementById("seconds");

//change this date to current year
const newYeareve = "1 Jan 2022";

//Functions here---------------------------------------
function countdown(){
    const newYearDate = new Date(newYeareve);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;  

    daysElement.innerHTML = formattime(days);
    hoursElement.innerHTML = formattime(hours);
    minsElement.innerHTML = formattime(mins);
    secondsElement.innerHTML = formattime(seconds);
}

function formattime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);