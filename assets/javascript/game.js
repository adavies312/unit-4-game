$(document).ready(function () {

    // initialize variables
    var score = 0;
    var wins = 0;
    var losses = 0;

    // update the dom
    $("#totalScore").html(score);
    $("#wins").html(wins);
    $("#losses").html(losses);

    // pick a random number
    var randomNum = 18 + Math.floor(Math.random() * 102);
    console.log(randomNum);
    // update the DOM
    $("#randomNumber").html(randomNum);

    // assign random numbers to each crystal
    var purpleCrystal = 1 + Math.floor(Math.random() * 12);
    var redCrystal = 1 + Math.floor(Math.random() * 12);
    var greenCrystal = 1 + Math.floor(Math.random() * 12);
    var blueCrystal = 1 + Math.floor(Math.random() * 12);

    // click the crystal to add to score
    // check conditions to see if user won each click 
    // calls results function 
    
    $("#purple").on("click", function () {
        score = score + purpleCrystal;
        console.log(score);
        $("#totalScore").html(score);
        // Check conditions for win or loss
        results();
    })

    $("#red").on("click", function () {
        score = score + redCrystal;
        console.log(score);
        $("#totalScore").html(score);
        // Check conditions for win or loss
        results();
    })

    $("#green").on("click", function () {
        score = score + greenCrystal;
        console.log(score);
        $("#totalScore").html(score);
        // Check conditions for win or loss
        results();
    })

    $("#blue").on("click", function () {
        score = score + blueCrystal;
        console.log(score);
        $("#totalScore").html(score);
        // Check conditions for win or loss
        results();
    })

    // conditions for winning / losing stored in results function 
    var results = function () {
        if (score === randomNum) {
            wins++;
            //update DOM
            $("#wins").html(wins);
            //reset the game
            reset();

        } else if (score > randomNum) {
            losses++;
            //update DOM
            $("#losses").html(losses);
            //reset the game
            reset();
        }
    };

    // create a reset function
    // Resets score to 0
    // Updates random number and values of crystal 
    // Update the DOM
    var reset = function () {
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
})