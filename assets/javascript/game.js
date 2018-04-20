$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var score = 0;
    random = [];
    var randomNum = Math.floor(Math.random() * 102) + 18;
    console.log(randomNum);
    random.push(randomNum);


    // show number to guess

    $("#randomNumber").html(random[0]);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#totalScore").html(score);

    //randomly select number for crystal

    var purpleCrystal = Math.floor(Math.random() * 12) + 1;
    var redCrystal = Math.floor(Math.random() * 12) + 1;
    var greenCrystal = Math.floor(Math.random() * 12) + 1;
    var blueCrystal = Math.floor(Math.random() * 12) + 1;

    //reset the game



    // set a loop to check if score = randomNumber
    // if score is > randomnumber then lose


    

    $("#purple").on("click", function () {
        score = score + purpleCrystal;
        console.log(score);
        $("#totalScore").html(score);

    })

    $("#red").on("click", function () {
        score = score + redCrystal;
        console.log(score);
        $("#totalScore").html(score);

    })

    $("#green").on("click", function () {
        score = score + greenCrystal;
        console.log(score);
        $("#totalScore").html(score);

    })

    $("#blue").on("click", function () {
        score = score + blueCrystal;
        console.log(score);
        $("#totalScore").html(score);

    })
});