//link to <header class="score-link-timer" id="score-link-timer"> High Score Link & Timer
var scoreLinkAndTimerEl = document.querySelector(".score-link-timer");

//link to <section class="start-game" id="start-game"> for start/home page
var startGameEl = document.querySelector(".start-game");

//Link to <section class="questions" id="questions"> for... you guessed it ... questions
var questionsEl = document.querySelector(".questions");

//link to <section class="finish-game" id="finish-game"> end game page
var finishGameEl = document.querySelector(".finish-game");

//Link to <section class="high-scores" id="high-scores"> High Scores page
var highScoreLinkEl = document.querySelector(".high-scores");

//array of all sections
var pageContent = [scoreLinkAndTimerEl, startGameEl, questionsEl, finishGameEl, highScoreLinkEl];

//array of question array and answer array(s)
var quiz = {
  /** Question 1: quiz.question[0]
   * Question 2: quiz.question[1]
   * Question 3: quiz.question[2]
   * Question 4: quiz.question[3] **/
  question:["Commonly used data types DO NOT include:", 
    "The condition of an if/else statement is enclosed with _______ .",
    "Arrays in JavaScript can be used to store _______ .",
    "String values must be enclosed within _______ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"],
  choices:[
    //question one choices
    ["Alerts", "Strings", "Booleans", "Numbers"],
    //question two choices
    ["Parenthesis", "Quotes", "Curly Brackets", "Square Brackets"],
    //question three choices
    ["Numbers and strings", "Other Arrays", "Booleans","All of the above"],
    //question four choices
    ["Commas", " Curly Brackets", "Quotes", "Parenthesis"],
    //question five choices
    ["JavaScript", "For Loops", "Terminal/Bash", "Console.log()"],
  ],  
  //answers in order 0-3 === question 0-3
  answers:["Alerts", "Parenthesis","All of the above", "Quotes", "Console.log"],
}; 



//on load begin/quiz instruction
var begin = function() {
  for (var i = 0; i < pageContent.length; i++) 
    if (pageContent[i] !== scoreLinkAndTimerEl && pageContent[i] !== startGameEl) {
      pageContent[i].style.display = "none";
    } 
  scoreLinkAndTimerEl.innerHTML = '<span><a href="#high-scores">View High Scores</a></span>' + '<span class="timer">Timer:0</span>';
  startGameEl.innerHTML ='<p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your time by ten seconds!';
  startGameEl.insertAdjacentHTML('beforeend','<button class="start btn">Start Game</button>');  
}; 
window.onload = function(){
  begin();
}

var quizPage = function(){
  for (var i = 0; i < pageContent.length; i++)
  if (pageContent[i] !== questionsEl && pageContent[i] !== scoreLinkAndTimerEl) {
    pageContent[i].style.display = "none";
  } else {
    pageContent[i].style.display = "block";
  }
  questionsEl.innerHTML = '<p class="questions">' + quiz.question[0] + '</p>';
  
  for (var i = 0; i < quiz.choices[0].length; i ++)
  console.log(quiz.choices[0][i]); 

  questionsEl.insertAdjacentElement('beforeend',"div");
}
startGameEl.addEventListener("click", quizPage);
//quizPage();

// var timerEl
//variables to connect to page
var timeEl = document.querySelector(".timer");

//timer function for start game and wrong answers
//timer set amount
var secondsLeft = 10;
  var timerInterval;

//the timing interval of seconds
function start(){
  timerInterval = setInterval(count, 1000);
}

//stop the timer
function stop(){
  clearInterval(timerInterval);
  sendMessage();
}

//countdown
function count() {
  secondsLeft--;
  timeEl.textContent = "Timer:" + secondsLeft;
  if(secondsLeft === 0) {
    stop();
  }
}

//wrong answer
function loseTime() {
  secondsLeft-=10;
  if(secondsLeft<=0) {
    stop();
  }
  else  {
  timeEl.textContent = "Timer:" + secondsLeft;
  }
}

//start the timer
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Timer:" + secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

//after stop send a message
function sendMessage() {
  if (secondsLeft === 0) {
  timeEl.textContent = "Game Over";
  } else {
    timeEl.textContent = "Your Final Score is " + secondsLeft;
  }
}



//clicking Start Quiz starts the timer
//startGameEl.addEventListener("click", gameRun); 











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
//the second button will clear the high scores list to start over*/