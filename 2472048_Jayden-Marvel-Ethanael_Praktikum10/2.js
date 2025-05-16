// 2472048 - Jayden Marvel Ethanael //
let timer;
let i = 0;
let minute = 25;
function switchMode(n) {
    if (n=="0") {
        document.getElementById("body").style.backgroundColor="#894682";
        minute = 25;
        stopTimer();
    } else if (n=="1") {
        document.getElementById("body").style.backgroundColor="#4988BB";
        minute = 5;
        stopTimer();
    }
}

function startTimer() {
    document.getElementById("button").innerHTML="RESET";
    document.getElementById("button").onclick=stopTimer;
    var time =  minute * 60;
    timer = setInterval(() => {
        if (--time < 0) {
            time = 0
            stopTimer()
            alert("Time's up!")
        }
        asd = parseInt(time / 60);
        seconds = parseInt(time % 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        console.log(time)
        document.getElementById("timer").innerHTML = asd + ":" + seconds
    }, 1000);
}
function stopTimer() {
    document.getElementById("button").innerHTML="START"
    document.getElementById("button").onclick=startTimer
    document.getElementById("timer").innerHTML=minute+":00"
    clearInterval(timer)
}