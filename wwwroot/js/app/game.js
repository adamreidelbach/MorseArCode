
// ***** Countdown Timer
let count = 10 + 1,
    counter = setInterval(timer, 1000), //1000 will  run it every second
    challengeWord = document.getElementById("challengeWord"),
    userResponse = document.getElementById("userResponse");
var countdown = document.getElementById("timer"),
    userScore = document.getElementById("userScore"),
    score = document.getElementById("Score");

function timer() {
    count--;
    if (count < 10) {
        count = "0" + count
    }
    countdown.innerHTML = "00:" + count;
    if (count == 0)
    {
        document.getElementById("timer").innerHTML = "00:00";
        clearInterval(counter);
        //counter ended, do something here
        return;
    }
    if (userResponse.innerHTML === challengeWord.innerHTML) {
        alert("Correct!");
        clearInterval(counter);
        countdown.innerHTML = "00:00"
        userScoreNum = parseInt(userScore.innerHTML);
        userScoreNum += 1000;
        userScore.innerHTML = userScoreNum;
        let newNum = userScore.innerHTML;
        score.value = newNum;
    }
}
timer();
