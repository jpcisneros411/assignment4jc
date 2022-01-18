const question ={
  questionPhrase: "",
  answerChoices: [answer1,answer2,answer3,answer4],
  answer: ""
};

const questionArray = new question[i];

question[0]= {
  questionPhrase = "What color is the sky?",
  answerChoices: ["blue","green","red","yellow"],
  answer: "blue"
};
question[1]= {
  questionPhrase = "What flavor was the jelly?",
  answerChoices: ["blue","grape","red","yellow"],
  answer: "grape"
};
question[2]= {
  questionPhrase = "What my name is?",
  answerChoices: ["blue","green","red","Jason"],
  answer: "blue"
};
// ///

// var timerElement = document.querySelector(".timer-count");
// var startButton = document.querySelector(".start-button");

// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");

// var timer;
// var timerCount;

// var isWin = false;

// // The startGame function is called when the start button is clicked
// function startGame() {
//     isWin = false;
//     timerCount = 10;
//     // Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;
//     renderBlanks()
//     startTimer()
//   }


// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
//         // Tests if win condition is met
//         if (isWin && timerCount > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);
//   }

//   // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();
// ///