let name = document.querySelector("#name");
let clock = document.querySelector("#clock");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector ("#second");


displayTime()


name.innerHTML = prompt("Adınız :")


function displayTime() {
    let dateTime  = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if (hrs<10) {
        hrs= "0"+hrs;
    } else {
        hour.innerHTML = hrs;
    }
     if (min<10) {
        min= "0"+min;
    } else {
        minute.innerHTML = min;
    }
    if (sec<10) {
        sec= "0"+sec;
    } else {
        second.innerHTML = sec;
    }
   

}

setInterval(displayTime,10);