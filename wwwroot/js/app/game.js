
// ***** Countdown Timer
let count = 10 + 1,
    counter = setInterval(timer, 1000), //1000 will  run it every second
    challengeWord = document.getElementById("challengeWord"),
    userResponse = document.getElementById("userResponse");
    
var countdown = document.getElementById("timer");

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
    if (userResponse.innerHTML === challengeWord.innerHTML) {
        alert("Correct!");
        clearInterval(counter);
        countdown.innerHTML = "00:00"
    }
}
timer();
