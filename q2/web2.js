src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
var url = 'https://opentdb.com/api.php?';
var numberOfRounds = 2;
var currentRound = 1;
var score = 0;
var level = "easy";
var correct = "";
var questionType = 'multiple';
var category;
var NewCount = 1;

function showSelect() {
    $(".mainPage").hide();
    $(".selectPage").show();
}

function startGame() {
    $(".selectPage").hide();
    $(".gamePage").show();
    showQuestion();
}

function setBool() {
    questionType = 'boolean'
    $("#answer3").hide();
    $("#answer4").hide();
}

function selectCategory(categoryName) {
    category = categoryName;
}

function showQuestion() {
    var serverUrl = url + "amount=1" + "&category=" + category + "&difficulty=" + level + "&type=" + questionType;
    $('#scores').text('Score: ' + score);
    $('#level').text('Level: ' + level);
    $('#round').text('Question ' + currentRound);

    $.ajax({
        url: serverUrl,
        type: "GET",
        success: function (data) {
            console.log(data);

            var question = data.results[0].question;
            question = question.replace(/&quot;/g, '\"');
            question = question.replace(/&#039;/g, '\'');
            $("#question").text(question);
            showAnswers(data.results[0].correct_answer, data.results[0].incorrect_answers);
            console.log(correct);
        }
    });

}

function showAnswers(correctAnswer, incorrectAnswers) {
    if (questionType == "boolean") {
        $("#answer1").text("True");
        $("#answer2").text("False");
        if (correctAnswer == "True") correct = "answer1";
        else correct = "answer2";
    }
    else {
        var num = getRandomInt(1, 4);
        var incorrect = 0;
        for (var i = 1; i <= 4; i++) {
            if (i == num) {
                $("#answer" + num).text(correctAnswer);
                correct = "answer" + i;
                continue;
            } else {
                $("#answer" + i).text(incorrectAnswers[incorrect]);
                incorrect++;
            }
        }
    }
}

function checkAnswer(ans) {
    if (ans == correct) {
        $('#' + ans).css('background-color', 'lightgreen');
        $('#' + ans).delay(300).queue(function (next) {
            $(this).css('background-color', '');
            next();
        });
        setScores(50);
        setRound();
        showQuestion();
    }
    else {
        $('#' + ans).css('background-color', 'lightcoral');
        $('#' + ans).delay(300).queue(function (next) {
            $(this).css('background-color', '');
            next();
        });
        setScores(-50);
    }
}

function setScores(num) {
    score += num;
    $('#scores').text('Score: ' + score);
    if (score < 0) {
        $('#scores').css('color', 'red');
    }
    else {
        $('#scores').css('color', 'black');
    }
}

function setRound() {
    currentRound++;
    if (currentRound == 5) {
        level = "medium"
    }
    else if (currentRound == 10) {
        level = "hard"
    }
    else if (currentRound == 15) {
        $(".gamePage").hide();
        $(".winPage").show();
    }
}

function restartWin() {
    $(".winPage").hide();
    $(".mainPage").show();
}

function restartLose() {
    $(".losePage").hide();
    $(".mainPage").show();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

