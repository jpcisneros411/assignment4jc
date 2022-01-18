document.body.onload = addElement;
const question ={
  phrase: "",
  choices: [],
  answer: ""
};
//const myElement = document.getElementById("intro");
function addElement(){
  

//console.log(myElement);
//myElement.setAttribute("intro", "Welcome to the Coding Quiz!");
// let element = document.createElement("div");
const newDiv = document.createElement("div");
const newContent = document.createTextNode("Question 1: What color is the sky?")
newDiv.appendChild(newContent);
const currentDiv = document.getElementById("intro");
document.body.insertBefore(newDiv,currentDiv);

};
//console.log(myElement);


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
//
// question[0]= {
//   phrase: "What color is the sky?",
//   choices: ["blue","green","red","yellow"],
//   answer: "blue"
// };
// question[1]= {
//   phrase: "What flavor was the jelly?",
//   choices: ["blue","grape","red","yellow"],
//   answer: "grape"
// };
// question[2]= {
//   phrase: "What my name is?",
//   choices: ["blue","green","red","Jason"],
//   answer: "blue"
// };
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