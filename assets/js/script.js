//different page identifier variables
//home page
var homeSectionsEl = document.querySelector(".page-content .score-and-timer, .quiz-home");

//quiz start for eventlistner
var startEl = document.querySelector("#start-quiz");

//questions page
var questionsEl = document.querySelector(".page-content .quiz-question");

//finish questions/ give score page
var endEl = document.querySelector(".page-content .quiz-final-score");

//high scores page
var highScoreEl = document.querySelector(".page-content .high-scores");

//sections array
var sectionArray = [homeSectionsEl, startEl, questionsEl, endEl, highScoreEl];

var countdown = document.querySelector("#timer");

//questions for an array to create random order of questions 
// and a random order of answers
var questionOneEl = document.querySelector("#question-one");

var questionTwoEl = document.querySelector("#question-two");

var questionThreeEl = document.querySelector("#question-three");

var questionFourEl = document.querySelector("#question-four");

var questionFiveEl = document.querySelector("#question-five");

var questionArray = [questionOneEl, questionTwoEl, questionThreeEl, questionFourEl, questionFiveEl];

//all wrong answers array
var wrongArrayOne = ["Strings", "Booleans", "Numbers"];

var wrongArrayTwo = ["Quotes", "Curly Brackets", "Squarre Brackets"];

var wrongArrayThree = ["Numbers and Strings", "Other Arrays", "Booleans"];

var wrongArrayFour = ["Commas", "Curly Brackets", "Parenthesis"];

var wrongArrayFive =["JavaScript", "For Loops", "Terminal/Bash"];
//on page load only show the sections with "score-and-timer" & "quiz-home" class
var homePageDisplay = function() {
  for (var i = 0; i < sectionArray.length; i++) {
    if (sectionArray[i] !== homeSectionsEl && sectionArray[i] !== startEl) {
      sectionArray[i].style.display = "none";
    }
  }
};

//quiz start main function
var quizStart = function(event) {
  for (var i = 0; i < sectionArray.length; i++) {
    if (sectionArray[i] !== questionsEl) {
      sectionArray[i].style.display = "none";
    } else {
      sectionArray[i].style.display = "block";
    }
  }
for (var j = 0; j < questionArray.length; j++) {
  if (questionArray[j] !== questionOneEl) {
    questionArray[j].style.display = "none";
  } else {
    questionArray[j].style.display = "block";
    var qAndA = answersOne();
    questionArray[j].appendChild(qAndA);
    console.log(questionArray[j]);
    }
  }
};

//timer
startEl.onclick = function(){
  var timeLeft = 75;
  var downloadTimer = setInterval(function(){
    timeLeft -= 1;
    document.getElementById("timer").innerHTML = "Time: " + timeLeft;
    if (timeLeft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("timer").innerHTML = timeLeft;
    }
  }, 1000);
  
};


//questions and their answers
var answersOne = function(){
  debugger;
  var answers = document.createElement("div")
  answers.className = "answers-contain-one"
  
  var answerOneCorrect = document.createElement("button");
  answerOneCorrect.className = "btn answers";
  answerOneCorrect.textContent = "Alerts";
  answerOneCorrect.id = "answer-one";
  answers.appendChild(answerOneCorrect);

  
  for (var i = 0; i < wrongArrayOne.length; i++) {
    document.getElementById("answers-contain-one").innerHTML += 
    "<button>" + wrongArrayOne[i] + "</button>";
  }
  
  
   /* var wrong = [];
    wrong = wrongArrayOne[i].toString()
    console.log(wrong);
    
    /*
    wrongArrayOne[i].className = "wrong-answer";
    wrongArrayOne[i].textContent = wrongArrayOne[i].toString();
    wrong.appendChild(); 
    answers.appendChild(wrong);
    return answers;*/
};    


  /*var answerTwoCorrect = document.createElement("button");
  answerTwoCorrect.className = "btn answers";
  answerTwoCorrect.textContent = "Parenthesis";
  answerTwoCorrect.id = "answer-two";
  questionTwoEL.appendChild(answerTwoCorrect);

  var answerThreeCorrect = document.createElement("button");
  answerThreeCorrect.className = "btn answers";
  answerThreeCorrect.textContent = "All of the above";
  answerThreeCorrect.id = "answer-three";
  questionThreeEL.appendChild(answerThreeCorrect);

  var answerFourCorrect = document.createElement("button");
  answerFourCorrect.className = "btn answers";
  answerFourCorrect.textContent = "Quotes";
  answerFourCorrect.id = "answer-four";
  questionFourEL.appendChild(answerFourCorrect);

  var answerFiveCorrect = document.createElement("button");
  answerFiveCorrect.className = "btn answers";
  answerFiveCorrect.textContent = "Console.log()";
  answerFiveCorrect.id = "answer-five";
  questionFiveEL.appendChild(answerFiveCorrect);*/











    






//on website loading
window.addEventListener("load", homePageDisplay);
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