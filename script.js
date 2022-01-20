var timerEl = document.querySelector(".countdown")
var mainEl = document.getElementById('main');
var intro = document.getElementById("intro");
var headline = document.querySelector("#headline") ;
intro.textContent = "Welcome to the Coding Quiz";
headline.textContent = "Hello, this is a practice quiz to help with interviews.";
var buttonStart = document.querySelector("#button1");
let btn = document.createElement('button');
let btn2 = document.createElement('button');
let btn3 = document.createElement('button');
let btn4 = document.createElement('button');
var score = 0;
var timeLeft = 10;
var questionNumber = 0;
var f = document.createElement("input");
var timeInterval;
var initialInput = document.querySelector(".initialInput");
var submitInitials = document.querySelector("#submitInitials");
var inputData = document.querySelector("#inputData");

// f.setAttribute('method',"post");
// f.setAttribute('action',"submit.php");

// f.appendChild(i);
// f.appendChild(s);

// document.getElementsByTagName('body')[0].appendChild(f);

// var i = document.createElement("input");
// i.type = "text";
// i.name = "user_name";
// i.id = "user_name1";

// var s = document.createElement("input");
// s.type = "submit";
// s.value = "Submit";


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
    },
    {
    phrases: "Where is the juice?",
    choices: ["blue","grape","loose","yellow"],
    answer: "loose"
    },
    {
    phrases: "What gonna win a dollar?",
    choices: ["me","grape","red","yellow"],
    answer: "me"
    },
    {
    phrases: "What kind of taco I want?",
    choices: ["blue","grape","fajita","yellow"],
    answer: "fajita"
    }
    ]
    // console.log(questionsArray);
    // console.log(questionsArray[questionNumber].choices[2]);
    // console.log(questionsArray[questionNumber].answer);

function countdown() {
 console.log(timeLeft);

 timeInterval = setInterval(function () {
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
  intro.textContent = questionsArray[questionNumber].phrases;
  buttonStart.textContent = "";
  headline.textContent = "";
  document.body.appendChild(btn);
  document.body.appendChild(btn2);
  document.body.appendChild(btn3);
  document.body.appendChild(btn4);

  btn.textContent = questionsArray[questionNumber].choices[0];
  btn2.textContent = questionsArray[questionNumber].choices[1];
  btn3.textContent = questionsArray[questionNumber].choices[2];
  btn4.textContent = questionsArray[questionNumber].choices[3];

  btn.value = questionsArray[questionNumber].choices[0];
  btn2.value = questionsArray[questionNumber].choices[1];
  btn3.value = questionsArray[questionNumber].choices[2];
  btn4.value = questionsArray[questionNumber].choices[3];

}
  
  function compare(event){
    console.log("compare")
    var selectedButton = event.target;
    if (selectedButton.value == questionsArray[questionNumber].answer){
      score++;
    }
    else{
      timeLeft -= 5;
    }
    questionNumber++;
    if (questionNumber>=questionsArray.length){
      console.log(score);
      gameOver();
    } else{
      houdini();
      if (timeLeft <= 0){
          gameOver();
        }
        console.log(score);
      }
    }
    
  
  function gameOver(){
      console.log(gameOver);
      clearInterval(timeInterval);
      intro.textContent="";
      initialInput.removeAttribute("class");
      timerEl.textContent="";
      btn.setAttribute("class","initialInput");
      btn2.setAttribute("class","initialInput");
      btn3.setAttribute("class","initialInput");
      btn4.setAttribute("class","initialInput");
    }
    
    function highScores(){
      console.log("potato");
      var initials = inputData.value;
      console.log(initials);
      console.log(score);
      localStorage.setItem(score, initials);
    }
    
    submitInitials.addEventListener("click",highScores);
    startButton.addEventListener("click", countdown);
    startButton.addEventListener("click", houdini)
    btn.addEventListener("click",compare);
    btn2.addEventListener("click",compare);
    btn3.addEventListener("click",compare);
    btn4.addEventListener("click",compare);
    