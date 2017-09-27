

// ***** Countdown Timer
let count = 20 + 1; //1000 will  run it every second
let counter;
var countdown = document.getElementById("timer"),
    score = document.getElementById("Score");

function cdReset() {
    count = 20; //reset counter and display
    countdown.innerHTML = "00:" + count;
    clearInterval(counter); //clear the timer
    counter = setInterval(timer, 1000); //store counter
}

function queryScores() {
    let playerScore = parseInt($("#userScore").html());
    let databaseHiScore = parseInt($("#hiscore").html());
    if (playerScore > databaseHiScore) {
        $("#hiscore").html(playerScore);
    }
}

$("#userResetInput").click(function() {
    var userString = $("#userResponse").html();
    var userSplit = userString.split("");
    var location = userSplit.length - 1;
    userSplit.splice(location, 1);
    $("#userResponse").html(userSplit);
});

let bonus;
function timer() {
    count--;
    if (count < 10) {
        count = "0" + count
    }
    if (count <= 5) {
        $("#timer").addClass("red");
    }
    countdown.innerHTML = "00:" + count;
    if ($("#userResponse").html() === $("#challengeWord").html() && count >= 15) {
        clearInterval(counter);
        countdown.innerHTML = "00:00"
        bonus = 2000;
        populateScore(bonus);
        queryScores();
        charactersPerMinute();
        populateCPM();
        $("#challengeWord").html("Correct!<br>Hit Start to Continue");
        $("#userScore").addClass("green");
        $("#startCountdown").removeClass("hidden");
        $("#difficulty").removeClass("hidden");
        $("#newWord").addClass("hidden");
        $("#userResetInput").addClass("hidden");
        $("#timer").removeClass("red");
        characterCounter = 0;
        startTime = 0;
        finishTime = 0;
        timeDifference = 0;
        return;
    }
    else if ($("#userResponse").html() === $("#challengeWord").html() && count >= 10) {
        clearInterval(counter);
        countdown.innerHTML = "00:00"
        bonus = 1500;
        populateScore(bonus);
        queryScores();
        charactersPerMinute();
        populateCPM();
        $("#challengeWord").html("Correct!<br>Hit Start to Continue");
        $("#userScore").addClass("green");
        $("#startCountdown").removeClass("hidden");
        $("#difficulty").removeClass("hidden");
        $("#newWord").addClass("hidden");
        $("#userResetInput").addClass("hidden");
        $("#timer").removeClass("red");
        characterCounter = 0;
        startTime = 0;
        finishTime = 0;
        timeDifference = 0;
        return;
    }
    else if ($("#userResponse").html() === $("#challengeWord").html() && count >= 5) {
        clearInterval(counter);
        countdown.innerHTML = "00:00"
        bonus = 1000;
        populateScore(bonus);
        queryScores();
        charactersPerMinute();
        populateCPM();
        $("#challengeWord").html("Correct!<br>Hit Start to Continue");
        $("#userScore").addClass("green");
        $("#startCountdown").removeClass("hidden");
        $("#difficulty").removeClass("hidden");
        $("#newWord").addClass("hidden");
        $("#userResetInput").addClass("hidden");
        $("#timer").removeClass("red");
        characterCounter = 0;
        startTime = 0;
        finishTime = 0;
        timeDifference = 0;
        return;
    }
    else if ($("#userResponse").html() === $("#challengeWord").html() && count > 0) {
        clearInterval(counter);
        countdown.innerHTML = "00:00"
        bonus = 500;
        populateScore(bonus);
        queryScores();
        charactersPerMinute();
        populateCPM();
        $("#challengeWord").html("Correct!<br>Hit Start to Continue");
        $("#userScore").addClass("green");
        $("#startCountdown").removeClass("hidden");
        $("#difficulty").removeClass("hidden");
        $("#newWord").addClass("hidden");
        $("#userResetInput").addClass("hidden");
        $("#timer").removeClass("red");
        characterCounter = 0;
        startTime = 0;
        finishTime = 0;
        timeDifference = 0;
        return;
    }
    if (count == "00") {
        $("#timer").html("00:00");
        $("#challengeWord").html("Times Up! &#9785;<br>Hit Start to Continue");
        $("#startCountdown").removeClass("hidden");
        $("#difficulty").removeClass("hidden");
        $("#newWord").addClass("hidden");
        $("#userResetInput").addClass("hidden");
        $("#timer").removeClass("red");
        clearInterval(counter);
    }
}
timer();

function populateWords(result) {
    $("#startCountdown").click(function() {
        startTime = new Date().getTime(); //set time for first key press
        $("#playInstructions").addClass("hidden");
        $("#startCountdown").addClass("hidden");
        $("#userScore").removeClass("green");
        $("#difficulty").addClass("hidden");
        $("#newWord").removeClass("hidden");
        $("#userResetInput").removeClass("hidden");
        $('#displayCPM').html("0");
        cdReset();
        var num = Math.floor((Math.random() * 10));
        let newWord = result[num];
        $("#challengeWord").html(newWord);
        $("#userResponse").html("");
    });
}

$(function () {
    $( document ).keyup();
});

var characterCounter = 0;
var startTime;
var finishTime = 0;
var timeDifference = 0;

function charactersPerMinute() {
    let challengeSplit = $("#challengeWord").html();
    let splittedChallenge = challengeSplit.split("");
    finishTime = new Date().getTime();
    characterCounter = splittedChallenge.length;
    timeDifference = (finishTime - startTime) / 1000;
    var charPerSec = characterCounter / timeDifference;
    var userCPM = (charPerSec * 60).toFixed(2);
    $('#displayCPM').html(userCPM);
}

function populateScore(bonus) {
    var userScoreString = $("#userScore").html();
    var userScoreNum = parseInt(userScoreString);
    userScoreNum += bonus;
    $("#userScore").html(userScoreNum);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/Game/EditUserScore',
        data: {Score: userScoreNum}
    });
}

function populateCPM() {
    var userCPM = $("#displayCPM").html();
    var userCPMdec = parseFloat(userCPM);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/Game/AddUserCPM',
        data: {CPM: userCPMdec}
    });
}

$("#difficulty").change(getWordsFromDB);

function getWordsFromDB() {
    var level = $(this).find('option:selected')[0];
    $.ajax({
        type: 'GET',
        url: `http://localhost:5000/Game/GetWords?difficulty=${$(level).val()}`,
        success: function (result) {
            $("#challengeWord").html("Hit Start To Begin");
            $("#playInstructions").removeClass("hidden");
            populateWords(result);
            nextWord(result);
            $("#startCountdown").removeAttr("disabled");
        },
    });
}

function nextWord(result) {
    $("#newWord").click(function() {
        var num = Math.floor((Math.random() * 10));
        let newWord = result[num];
        $("#challengeWord").html(newWord);
        $("#userResponse").html("");
    });
}