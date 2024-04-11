function getHours(){
    const clock = document.querySelector("#clock");
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;

}

setInterval(getHours,1000)