This is the Makers week 5 and 6 weekend challenge (details below) to implement a 10-pin bowling scoreboard in Javascript.

To run
------
* Clone repo.
* Open ../index.html in a browser.

To run tests
------------
* Open ../SpecRunner.html in a browser.

Requirements
------------
* The game is played by 1 player.
* The player keys the number of pins knocked down after each bowl.
* The game consists of 10 frames.
* The player may bowl 1 or 2 bowls for each frame, depending on whether the first bowl is a strike.
* The score for each frame is calculated from 4 parts: the 1st bowl, the 2nd bowl, bonus 1 and bonus 2.
* If the player bowls a strike (10) on the first bowl, then then 2nd bowl is not used but both bonus 1 and bonus 2 will be included in the total score for the frame.
* If the player does not bowl a strike on the first bowl (<10) then they bowl the 2nd bowl.
* If the player gets a spare on the second bowl (bowl 1 + bowl 2 = 10) then bonus 1 will be included in the total score for the frame. (Bonus 2 will not be used)
* Bonus 1 is the number of pins knocked down by the next bowl (the first bowl of the next frame).
* Bonus 2 is the number of pins knocked down by the 2nd next bowl (either the 2nd bowl of the next frame, or the first bowl of the 2nd next frame if the next frame is a strike).
* If the player scores < 10 with the 2 bowls for a frame, then the score is simply the number of pins knocked down by bowl 1 + bowl2.

My Approach
-----------
* Translated the bowling rules into requirements of the scoreboard.
* Drew a draft model of classes, data and responsibilities
* Created an html page to help understand what would be required of the classes (javascript functions)
* Learnt a bit about CSS Flexbox and Grid to work out how to have well-aligned scores and totals.
* Test-drove the development of the classes by taking 1 requirement at a time.
* Used TO DO comments when I noted where something would need to be added for a later requirement.
* Learnt a bit about Javascript spies.
* Used JQuery and Javascript to tie the html to the classes
* Updated tests and classes 
* Refactored to break down the logic for displaying scores that was in a very large method with some repetition.

If had more time I would...
---------------------------
* Validate the input (e.g. user can currently enter more than 10 pins in a frame)
* Refactor the Jquery/Javascript to prevent totals being refreshed when they haven't changed?  (Consider whether the inefficiency of that is preferable to more complex code)
* Reconsider the responsibilities of the game and frame class that relate to the flow of the game as it feels like they are doing similar things in managing whether a 2nd/3rd bowl is required.


----------------------------------------------------------------------------------------------
Bowling Challenge
=================


* Challenge time: rest of the day and weekend.
* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.
