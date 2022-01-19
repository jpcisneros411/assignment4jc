var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
const currentDiv = document.getElementById("intro");
currentDiv.textContent = "Question 1: Sky color?";

  const questionsArray = [
    {
    phrase: "What color is the sky?",
    choices: ["blue","green","red","yellow"],
    answer: "blue"
    },
    {
    phrases: "What flavor was the jelly?",
    choices: ["blue","grape","red","yellow"],
    answer: "grape"
    },
    {
    phrases: "What my name is?",
    choices: ["blue","green","red","Jason"],
    answer: "blue"
    }
    ]
    console.log(questionsArray)
    console.log(questionsArray[0])
    console.log(questionsArray[0].answer)


var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');

// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

    //
// // question[0]= {
// //   phrase: "What color is the sky?",
// //   choices: ["blue","green","red","yellow"],
// //   answer: "blue"
// // };
// // question[1]= {
// //   phrase: "What flavor was the jelly?",
// //   choices: ["blue","grape","red","yellow"],
// //   answer: "grape"
// // };
// // question[2]= {
// //   phrase: "What my name is?",
// //   choices: ["blue","green","red","Jason"],
// //   answer: "blue"
// // };
// // ///
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

// // var win = document.querySelector(".win");
// // var lose = document.querySelector(".lose");

// var timer;
// var timerCount;

// var isWin = false;

// // The startGame function is called when the start button is clicked
// function startGame() {
//     isWin = false;
//     timerCount = 10;
//     // Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;
//     //renderBlanks()
//     startTimer()
//   }

//   function winGame() {
//     wordBlank.textContent = "YOU WON!!!🏆 ";
//     winCounter++
//     startButton.disabled = false;
//     setWins()
//   }

// // // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
//     //     // Tests if win condition is met
//          if (timerCount > 0) {
//     //       // Clears interval and stops timer
//            clearInterval(timer);
//            //winGame();
//          } 
//         }  
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         //loseGame();
//       }
//     }, 1000);
//   }
  
//   // Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", countdown);

// // Calls init() so that it fires when page opened
//init();
// ///