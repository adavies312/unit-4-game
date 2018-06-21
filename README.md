# Crystal Collectors Game

1. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

2. Here's how the app works:

   * There are four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * The game will hide this amount until the player clicks a crystal.
     * When they do click one, the player's score counter updates.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player sees a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app shows the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

3. Game Design Notes
* The random number shown at the start of the game is between 19 - 120.

* Each crystal has a random hidden value between 1 - 12.

## Built With
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## In Game Screenshot
![Crystals](/assets/images/crystal-collector.png)

