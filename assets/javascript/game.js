$(document).ready(function () {
//variables
score = 0;
wins = 0;
losses = 0;
//display variables in html
$("totalScore").html(score);
$("#wins").html(wins);
$("#losses").html(losses);

//random number to guess
var randomNum = 18 + Math.floor(Math.random() * 102);
console.log(randomNum);
$("#randomNumber").html(randomNum);

//assign random numbers to each crystal
purpleCrystal = 1 + Math.floor(Math.random() * 12);
redCrystal = 1 + Math.floor(Math.random() * 12);
greenCrystal = 1 + Math.floor(Math.random() * 12);
blueCrystal = 1 + Math.floor(Math.random() * 12);

var reset = function () {
    score = 0;
    //reset random number
    var randomNum = 18 + Math.floor(Math.random() * 102);
    console.log(randomNum);
    //reset crystal values
    purpleCrystal = 1 + Math.floor(Math.random() * 12);
    redCrystal = 1 + Math.floor(Math.random() * 12);
    greenCrystal = 1 + Math.floor(Math.random() * 12);
    blueCrystal = 1 + Math.floor(Math.random() * 12);
    $("#totalScore").html(score);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#randomNumber").html(randomNum);
}
//conditions for winning or losing
var results = function () {
    if (score === randomNum) {
        wins++;
        $("#wins").html(wins);
        reset ();
    } else if (score > randomNum) {
        losses++;
        $("#losses").html(losses);
        reset ();
    }
}
//clicking on crystals adds to score
//each click runs results function to determine if won or lost

$("#purple").on("click", function () {
    score = score + purpleCrystal;
    console.log(score);
    $("#totalScore").html(score);
    results ();
});

$("#red").on("click", function() {
    score = score + redCrystal;
    console.log(score);
    $("#totalScore").html(score);
    results();
});

$("#green").on("click", function() {
    score = score + greenCrystal;
    console.log(score);
    $("#totalScore").html(score);
    results();
});

$("#blue").on("click", function() {
    score = score + blueCrystal;
    console.log(score);
    $("#totalScore").html(score);
    results();
});
});