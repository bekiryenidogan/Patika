var setName = document.querySelector("#setName"),
  setClock = document.querySelector("#setClock"),
  hour = document.querySelector("#hour"),
  minute = document.querySelector("#minute"),
  second = document.querySelector("#second");
displayTime();
setName.innerHTML = prompt("Ad\u0131n\u0131z :");
function displayTime() {
  var a = new Date(),
    b = a.getHours(),
    c = a.getMinutes();
  a = a.getSeconds();
  hour.innerHTML = 10 > b ? "0" + b : b;
  minute.innerHTML = 10 > c ? "0" + c : c;
  second.innerHTML = 10 > a ? "0" + a : a;
}
setInterval(displayTime, 10);
