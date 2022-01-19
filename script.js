var timerEl = document.querySelector(".countdown")
var mainEl = document.getElementById('main');
const intro = document.getElementById("intro");
const headline = document.querySelector("#headline") ;
intro.textContent = "Welcome to the Coding Quiz";
headline.textContent = "Hello, this is a practice quiz to help with interviews.";


  const questionsArray = [
    {
    phrases: "What color is the sky?",
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
    answer: "Jason"
    }
    ]
    console.log(questionsArray);
    console.log(questionsArray[0].choices[2]);
    console.log(questionsArray[0].answer);

function countdown() {
  var timeLeft = 15;

 var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = 'times up!';
      clearInterval(timeInterval);
    }
  }, 1000);
}
var startButton = document.querySelector(".start-button");

function houdini(){
  intro.textContent = questionsArray[0].phrases[0];
}

startButton.addEventListener("click", countdown);
startButton.addEventListener("click", houdini)
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

  

