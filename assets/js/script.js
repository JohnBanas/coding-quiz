//body
var bodyEl = document.querySelector(".page-content")
//link to <header class="score-link-timer" id="score-link-timer"> High Score Link & Timer
var scoreLinkEl = document.querySelector(".high-score-link");

var timerEl = document.querySelector(".timer");

//link to <section class="start-game" id="start-game"> for start/home page
var startGameEl = document.querySelector(".start-game");

var startGameBtnEl = document.querySelector("#start-btn");


//Link  for... you guessed it ... questions

//all question sections
var questionsEl = document.querySelector(".question-contain");

//individual question & answers
var questionOneEl = document.querySelector("#section-question-one");
var questionTwoEl = document.querySelector("#section-question-two");
var questionThreeEl = document.querySelector("#section-question-three");
var questionFourEl = document.querySelector("#section-question-four");
var questionFiveEl = document.querySelector("#section-question-five");

var questionArray = [questionOneEl, questionTwoEl,questionThreeEl,questionFourEl,questionFiveEl];

//answers ? one
//all
var btnsOne = document.querySelector(".btn-one");

//individual
var correctAnsOne = document.querySelector("#one-btn-one");
var oneWrongAnsOne = document.querySelector("#one-btn-two");
var oneWrongAnsTwo = document.querySelector("#one-btn-three");
var oneWrongAnsThree = document.querySelector("#one-btn-one");

//answers ? two
//all
var btnsTwo = document.querySelector(".btn-two");

var correctAnsTwo = document.querySelector("#two-btn-three");
var twoWrongAnsOne = document.querySelector("#two-btn-one");
var twoWrongAnsTwo = document.querySelector("#two-btn-two");
var twoWrongAnsThree = document.querySelector("#two-btn-four");

//answers ? 3
//all
var btnsThree = document.querySelector(".btn-three");

var correctAnsThree = document.querySelector("#three-btn-four");
var threeWrongAnsOne = document.querySelector("#three-btn-one");
var threeWrongAnsTwo = document.querySelector("#three-btn-two");
var threeWrongAnsThree = document.querySelector("#three-btn-three");

//answers ? 4
//all
var btnsFour = document.querySelector(".btn-four");

var correctAnsFour = document.querySelector("#four-btn-three");
var fourWrongAnsOne = document.querySelector("#four-btn-one");
var fourWrongAnsTwo = document.querySelector("#four-btn-two");
var fourWrongAnsThree = document.querySelector("#four-btn-four");

//answers ? 5
//all
var btnsFive = document.querySelector(".btn-five");

var correctAnsFive = document.querySelector("#four-btn-three");
var fiveWrongAnsOne = document.querySelector("#four-btn-one");
var fiveWrongAnsTwo = document.querySelector("#four-btn-two");
var fiveWrongAnsThree = document.querySelector("#four-btn-four");

//link to <section class="finish-game" id="finish-game"> end game page
var finishGameEl = document.querySelector(".finish-game");
var finalScoreEl = document.querySelector(".final-score");

var initialRetrieve = localStorage.getItem("initials");

var submitBtnEl = document.querySelector(".submit-btn");

var highScorePageEl = document.querySelector(".high-scores");
var highScoreLinkEl = document.querySelector("#high-score-link");
var addHighScoreHere = document.querySelector(".high-score-form");
var goBackEl = document.querySelector("#go-back");
var clearHighScoreEl = document.querySelector("#clear-scores")
var scoreRankCounter = 0;


//initial display
window.onload = function(){
  clearPage();
  }

function clearPage(){
  startGameEl.style.display = "block";
  startGameBtnEl.style.display = "block";
  scoreLinkEl.style.display = "block";
  timerEl.style.display = "block";
  questionsEl.style.display = "none";
  finishGameEl.style.display = "none";
  highScorePageEl.style.display ="none";
}

function initializeGame(){
  startGameEl.style.display = "none";
  startGameBtnEl.style.display = "none";
  questionsEl.style.display = "block";
  questionOneEl.style.display = "block";
  questionTwoEl.style.display = "none";
  questionThreeEl.style.display = "none";
  questionFourEl.style.display ="none";
  questionFiveEl.style.display = "none";
}

function firstQuestionRight(){
  questionOneEl.style.display = "none";
  questionTwoEl.style.display = "block";
}

function firstQuestion(){
  questionOneEl.style.display = "none";
  questionTwoEl.style.display = "block";
  secondsLeft -= 10;
}

function secondQuestionRight(){
  questionTwoEl.style.display = "none";
  questionThreeEl.style.display = "block";
}

function secondQuestion(){
  questionTwoEl.style.display = "none";
  questionThreeEl.style.display = "block";
  secondsLeft -= 10;
}

function thirdQuestionRight(){
  questionThreeEl.style.display = "none";
  questionFourEl.style.display = "block";
}

function thirdQuestion(){
  questionThreeEl.style.display = "none";
  questionFourEl.style.display = "block";
  secondsLeft -= 10;
}

function fourthQuestionRight(){
  questionFourEl.style.display = "none";
  questionFiveEl.style.display = "block";
}

function fourthQuestion(){
  questionFourEl.style.display = "none";
  questionFiveEl.style.display = "block";
  secondsLeft -= 10;
}

function finishGameRight(){
  stop();
  finalScoreEl.textContent = "Your final score is:" + secondsLeft;
  questionFiveEl.style.display = "none";
  finishGameEl.style.display = "block";
  scoreLinkEl.style.display = "none";
  timerEl.style.display = "none";
}

function finishGame(){
  stop();
  finalScoreEl.textContent = "Your final score is:" + secondsLeft;
  questionFiveEl.style.display = "none";
  finishGameEl.style.display = "block";
  scoreLinkEl.style.display = "block";
  timerEl.style.display = "block";
  secondsLeft -= 10;
}

function highScores(){
  timerEl.style.display = "none";
  finishGameEl.style.display = "none";
  startGameEl.style.display = "none";
  startGameBtnEl.style.display = "none";
  questionsEl.style.display = "none";
  highScorePageEl.style.display = "block";
}

function storeInitials() {
  var initialsPlace = document.getElementById("your-initials").value;
  var highScoreListItem = document.createElement("li");
  highScoreListItem.className = "high-score-initials";
  highScoreListItem.setAttribute("high-score-rank", scoreRankCounter);
  highScoreListItem.textContent = initialsPlace;
  addHighScoreHere.appendChild(highScoreListItem);
  scoreRankCounter++; 
}

function clear(event){
  addHighScoreHere.innerHTML = '';
}

// var timerEl
//variables to connect to page


//timer function for start game and wrong answers
//timer set amount
var startTimer = 75;
var secondsLeft = 75;
var timerInterval;

//the timing interval of seconds
function count(){
  timerEl.textContent = "Timer:" + secondsLeft;
  secondsLeft-= 1;
  timerInterval = setTimeout(count, 1000); 
}

function setTime(){
  secondsLeft = 75;
  count();
}

//stop the timer
function stop(){
  clearTimeout(timerInterval);
}

//wrong answer
function loseTime() {
  secondsLeft-=10;
  if(secondsLeft<=0) {
    stop();
  }
}



/** <!DOCTYPE html>
<html>
<body>

<button onclick="startCount()">Start count!</button> = startGameBtnEl.addEventListener("click", setTime);
<input type="text" id="txt"> = timerEl
<button onclick="stopCount()">Stop count!</button> finishGame or finishGameRight

<p>
Click on the "Start count!" button above to start the timer. The input field will count forever, starting at 0. Click on the "Stop count!" button to stop the counting. Click on the "Start count!" button to start the timer again.
</p>

<script>
var c = 0; = secondsLeft
var t; timerInterval
var timer_is_on = 0;

function timedCount() {
  document.getElementById("txt").value = c;
  c = c + 1;
  t = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}
</script>

</body>
</html> **/

startGameBtnEl.addEventListener("click", setTime);
startGameBtnEl.addEventListener("click", initializeGame);

correctAnsOne.addEventListener("click", firstQuestionRight);
oneWrongAnsOne.addEventListener("click", firstQuestion);
oneWrongAnsTwo.addEventListener("click", firstQuestion);
oneWrongAnsThree.addEventListener("click", firstQuestion);

correctAnsTwo.addEventListener("click", secondQuestionRight);
twoWrongAnsOne.addEventListener("click", secondQuestion);
twoWrongAnsTwo.addEventListener("click", secondQuestion);
twoWrongAnsThree.addEventListener("click", secondQuestion);

correctAnsThree.addEventListener("click", thirdQuestionRight);
threeWrongAnsOne.addEventListener("click", thirdQuestion);
threeWrongAnsTwo.addEventListener("click", thirdQuestion);
threeWrongAnsThree.addEventListener("click", thirdQuestion);

correctAnsFour.addEventListener("click", fourthQuestionRight);
fourWrongAnsOne.addEventListener("click", fourthQuestion);
fourWrongAnsTwo.addEventListener("click", fourthQuestion);
fourWrongAnsThree.addEventListener("click", fourthQuestion);

correctAnsFive.addEventListener("click", finishGameRight);
fiveWrongAnsOne.addEventListener("click", finishGame);
fiveWrongAnsTwo.addEventListener("click", finishGame);
fiveWrongAnsThree.addEventListener("click", finishGame);

submitBtnEl.addEventListener("click", highScores);
highScoreLinkEl.addEventListener("click", highScores);
goBackEl.addEventListener("click", clearPage);

clearHighScoreEl.addEventListener("click", clear);















//when the 'start quiz' button is pressed a timer starts
// a question appears on the page with four optional answer buttons
// a correct answer will move on to the next page and display 'correct' in italicized gray letters
// a wrong answer will subtract 10 seconds from the timer but still moves on the next question and alert wrong
//after the questions have all been answered you are taken to an all done screen 
//at the all done screen your left over time is displayed as your score
//you are prompted to enter your initials
// if you enter your initials and hit the submit button or enter you go to the high scores page
// the high scores page has saved numbered positions for the high scores 
// you also have two buttons 
//one button labled go back will take you to the start quiz screen
//the second button will clear the high scores list to start over