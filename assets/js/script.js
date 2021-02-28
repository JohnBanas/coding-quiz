//different page identifier variables
//home page
var homeSectionsEl = document.querySelector(".score-and-timer, .quiz-home");

//quiz start for eventlistner
var startEl = document.querySelector("#start-quiz");

//questions page
var questionsEl = document.querySelector(".quiz-question");

//finish questions/ give score page
var endEl = document.querySelector(".quiz-final-score");

//high scores page
var highScoreEl = document.querySelector(".high-scores");


//console.log(homeSectionsEl, questionsEl, endEl, highScoreEl);

//on page load only show the sections with "score-and-timer" & "quiz-home" class
var homePageDisplay = function() {
  if (questionsEl || endEl || highScoreEl) {
    questionsEl.style.display = "none";
    endEl.style.display = "none";
    highScoreEl.style.display = "none";
  }
};

window.onload = homePageDisplay();

//quiz start main function
var quizStart = function(event) {
  
}


//when clicking 'start quiz' button call the function
//for quiz questions display 
startEl.addEventListener("click", quizStart);












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