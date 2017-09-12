
// ***** Countdown Timer
var count = 3 + 1;
var counter = setInterval(timer, 1000); //1000 will  run it every second

function timer() {
    count--;
    if (count < 10) {
        count = "0" + count
    }
    if (count == 0)
    {
        document.getElementById("timer").innerHTML = "00:00";
        clearInterval(counter);
        //counter ended, do something here
        return;
    }
    document.getElementById("timer").innerHTML = "00:" + count;
}
timer();