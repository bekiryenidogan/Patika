let setName = document.querySelector("#setName");
let setClock = document.querySelector("#setClock");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector ("#second");


displayTime()


setName.innerHTML = prompt("Adınız :")


function displayTime() {
    let dateTime  = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if (hrs < 10) {
        hour.innerHTML= "0"+hrs;
    } else {
        hour.innerHTML = hrs;
    }
     if (min<10) {
        minute.innerHTML= "0"+min;
    } else {
        minute.innerHTML = min;
    }
    if (sec< 10) {
        second.innerHTML = "0" + sec;
    } else {
        second.innerHTML = sec;
    }
    // hour.innerHTML = hrs;
    // // minute.innerHTML   = min;
    // second.innerHTML = sec;

}

setInterval(displayTime,10);