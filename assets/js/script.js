//body
var bodyEl = document.querySelector(".page-content")
//link to <header class="score-link-timer" id="score-link-timer"> High Score Link & Timer
var scoreLinkEl = document.querySelector(".high-score-link");

var timerEl = document.querySelector(".timer");

var gameInstructionEl = document.querySelector(".game-isntructions");

var startGamePage = document.querySelector(".game-start");

var startGameBtnEl = document.querySelector("#start-btn");

var finishEl = document.querySelector(".finish-game");

var highEl = document.querySelector(".high-scores");

var highListEl = document.querySelector(".high-score-list");

//Link  for... you guessed it ... questions

//all question sections
var questionsEl = document.querySelector(".questions");

var questionContainerEl = document.querySelector(".question-place");

//individual answers
var answersEl = document.querySelector(".btn-holder");

var goBackEl = document.querySelector("#go-back");



var questionObjArray = [
  {
    q:'Commonly used data types DO NOT include:', 
    a:['Alerts', 'Strings', 'Booleans', 'Numbers',]
  },
  {
    q:'The condition in an if/else statement is enclosed within______.',
    a:['Quotes','Curly Brackets','Parenthesis','Square Brackets']
  },
  {
    q:'Arrays in JavaScript can be used to store ______.',
    a:['Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the Above']
  },
  {
    q:'String values must be enclosed within ______ when being assigned to variables.',
    a:['Commas', 'Curly Brackets', 'Quotes', 'Parenthesis']
  },
  {
    q:'A very useful tool used during development and debugging for printing content to the debugger is:',
    a:['Console.log()', 'JavaScript', 'Terminal/Bash', 'For Loops']
  },
];


highScoreArray = [];

window.onload = gameStart();

function startOver(){
  location.reload();
}

//game start
function gameStart(){
  startGamePage.style.display = "block";
  gameInstructionEl.style.display = "block";
  questionsEl.style.display = "none";
  finishEl.style.display = "none";
  highEl.style.display = "none";
}

quest = 0;

function questions() {
  for(var i = quest; i < questionObjArray.length; i++){
    answersEl.innerHTML = "";
    var question = questionObjArray[i].q;
    var answer = questionObjArray[i].a 
    var mix = mixRandom(answer);
    for (var j = 0; j < answer.length; j++) {
      createBtn(mix[j]);
      if(mix[j]===mix.length - 1);
    }
      questionContainerEl.textContent = question;
      gameInstructionEl.style.display = "none";
      questionsEl.style.display = "block"; 
      answersEl.style.display = "block";

      if(questionObjArray[i].q===questionObjArray[0].q){
        return;
      } else if (questionObjArray[i].q===questionObjArray[1].q){
       return;
      } else if (questionObjArray[i].q===questionObjArray[2].q){
       return;
      } else if (questionObjArray[i].q===questionObjArray[3].q){
       return;
      } else if (questionObjArray[i].q===questionObjArray[4].q){
        remove();
       return;
      }
  }   
}

var createBtn = function(here){
  var answerBtn = document.createElement("button");
      answerBtn.className = "btn-answers";
      answerBtn.textContent = here.toString();
      answersEl.appendChild(answerBtn);
      if(here < here.length)
      here[i++];
}
// random shuffle code taken from
// user 'Blender' https://stackoverflow.com/users/464744/blender on Stack Overflow 
// on shuffling a range of numbers to prevent repetition
// https://stackoverflow.com/questions/15585216/how-to-randomly-generate-numbers-without-repetition-in-javascript
function mixRandom(z) {
  for(var x, y, i = z.length; i; x = parseInt(Math.floor((Math.random() * i))), y = z[--i], z[i] = z[x], z[x] = y);
  return z;
};

function add(event){
  quest++;
  questions();
}

function remove(){
  answersEl.removeEventListener("click", add);
  answersEl.addEventListener("click", finishedGame);

}

function finishedGame(){
  startGamePage.style.display = "block";
  questionsEl.style.display = "none";
  finishEl.style.display = "block";
  highEl.style.display = "none";
}

function highScoresPage(){
  startGamePage.style.display = "none";
  questionsEl.style.display = "none";
  finishEl.style.display = "none";
  highEl.style.display = "block";
  counting++;
}

var counting = 0;

var initials;

function storeInitials(){
  initials = document.querySelector("#your-initials").value;
  if(initials === ""){
    alert("Please type your initials.")
    return;
  } 
   createScoreItem(counting, initials + ": " + secondsLeft);
}
console.log(JSON.stringify(localStorage));

function createScoreItem(x,y){
  listItem = document.createElement("li");
  listItem.className = "saved-scores";
  listItem.textContent = y;
  highListEl.appendChild(listItem);
  localStorage.setItem(JSON.stringify(x), JSON.stringify(y));
  highScoresPage();
}

/**if (x.key(i) === 0){
    localStorage.setItem(counting, initials + ": " + secondsLeft);
    return;
     for (var i = 0; i < localStorage.length; i++){
      var pop = Object.keys(i);
      pop = counting;
      var forge = Object.value(i);
      createScoreItem(pop,forge);
      }
  }
  for (var i = 0; i < localStorage.length; i++){
    var position = localStorage.getItem(localStorage.key(i)); */

startGameBtnEl.addEventListener("click",questions); 
answersEl.addEventListener("click", add);
scoreLinkEl.addEventListener("click", highScoresPage);

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