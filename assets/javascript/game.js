$(document).ready(function () {

    // basic variables
    var score = 0;
    var wins = 0;
    var losses = 0;

    // update variables in html
    $("#totalScore").html(score);
    $("#wins").html(wins);
    $("#losses").html(losses);

    // pick a random number
    var randomNum = 18 + Math.floor(Math.random() * 102);
    console.log(randomNum);
    $("#randomNumber").html(randomNum);

    // assign random numbers to each crystal
    var purpleCrystal = 1 + Math.floor(Math.random() * 12);
    var redCrystal = 1 + Math.floor(Math.random() * 12);
    var greenCrystal = 1 + Math.floor(Math.random() * 12);
    var blueCrystal = 1 + Math.floor(Math.random() * 12);

    // create a restart function
    var restart = function () {
        score = 0;
        //assign new random number
        randomNum = 18 + Math.floor(Math.random() * 102);
        console.log(randomNum);
        //assign new crystal values
        purpleCrystal = 1 + Math.floor(Math.random() * 12);
        redCrystal = 1 + Math.floor(Math.random() * 12);
        greenCrystal = 1 + Math.floor(Math.random() * 12);
        blueCrystal = 1 + Math.floor(Math.random() * 12);
        $("#randomNumber").html(randomNum);
        $("#totalScore").html(score);
        $("#wins").html(wins);
        $("#losses").html(losses);
    }

    // conditions for winning / losing stored in results function 
    var results = function () {
        if (score == randomNum) {
            wins++;
            $("#wins").html(wins);
            restart();

        } else if (score > randomNum) {
            losses++;
            $("#losses").html(losses);
            restart();
        }
    };

    // click the crystal to add to score
    // check to see if user won each click -> calls results function 
    $("#purple").on("click", function () {
        score = score + purpleCrystal;
        console.log(score);
        $("#totalScore").html(score);
        results();
    })

    $("#red").on("click", function () {
        score = score + redCrystal;
        console.log(score);
        $("#totalScore").html(score);
        results();
    })

    $("#green").on("click", function () {
        score = score + greenCrystal;
        console.log(score);
        $("#totalScore").html(score);
        results();
    })

    $("#blue").on("click", function () {
        score = score + blueCrystal;
        console.log(score);
        $("#totalScore").html(score);
        results();
    })
})