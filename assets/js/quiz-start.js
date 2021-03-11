// question in DOM
const questionEl = document.getElementById("question");
//answer choices in DOM
const choicesEl = Array.from(document.getElementsByClassName("choice-text"));
// timer in a <p>
const timerContainerEl = document.getElementById("timer-container");
//console.log(timerContainerEl);

/** variable for question from array (displayed) **/
let currentQuestion = {};
//create variable that pauses the clicking option for answer buttons (timing delay on questions appearing)
let acceptingAnswers = false;
//keep track of score
let score = 0;
//variable to keep track of questions
let questionCounter = 0;
//array so that questions are placed and pulled from here, so that they are not reused during quiz
let availableQuestions = [];
//object array with questions, answers, and correct answers
let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choice1: "Alerts",
    choice2: "Strings",
    choice3: "Booleans",
    choice4: "Numbers",
    answer: 1
  },
  {
    question: "The condition in an if/else statement is enclosed within______.",
    choice1: "Quotes",
    choice2: "Curly Brackets",
    choice3: "Parenthesis",
    choice4: "Square Brackets",
    answer: 3
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    choice1: "Numbers and Strings",
    choice2: "Other Arrays",
    choice3: "Booleans",
    choice4: "All of the Above",
    answer: 4
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    choice1: "Commas",
    choice2: "Curly Brackets",
    choice3: "Quotes",
    choice4: "Parenthesis",
    answer: 3
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "Console.log()",
    choice2: "JavaScript",
    choice3: "Terminal/Bash",
    choice4: "For Loops",
    answer: 1
  }
];

//wrong answer subtracts five seconds
const wrongAns = 5;
//if more questions added later, 5 will be the maximum before endgame
const maxQuestions = 5;

//game start function places all content from questions object array in availableQuestions
//array and calls getNewQuestion function
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion(); 
}

//turns on timer, if no more questions in availableQuestions array, or reached max number of questions,
//store the time left/score value with key mostRecentScore. Stop the timer and go to end-game page
getNewQuestion = () => {
  startCount();
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    localStorage.setItem("mostRecentScore", score);
    /** go to the end game page  **/
    stopCount();
    return window.location.assign("end-game.html");
  };
  /* questionIndex gets a random number to set as an index from availableQuestions object array
  currentQuestion is the selected index from availableQuestions object array,
  then the question inner text is set as the question from questionIndex from availableQuestions object array  */
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  /* A forEach(choice) function that creates a const number to equal the data-number of the choice set in the HTML
  through choice.dataset then takes the current question choices and sets them equal to choice.innerText  */
  choicesEl.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion['choice' + number];
  });
  //remove current question from availableQuestions object array
  availableQuestions.splice(questionIndex, 1);
  //ready to accept answers after delay
  acceptingAnswers = true;
};

/* after a answer button is clicked, if accepting answers is false then return, if true, make false and move on */
choicesEl.forEach(choice => {
  choice.addEventListener("click", event => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;

    /* const for the clicked button */
    const selectedChoice = event.target;
    /* const for the clicked button's data-number */
    const selectedAnswer = selectedChoice.dataset["number"];

    /* labels clicked button as correct or incorrect by comparing to the current question index answer
    (does the) selectedAnswer ==(equal)? (yes/true)"correct" :(else/false) "incorrect" */
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    /* if answer is incorrect subtract 5 from timer */
    if (classToApply === "incorrect") {
      scoreValueDecrease(wrongAns);
    }
    
    /* adds correct or incorrect class to allow for button color change*/
    selectedChoice.parentElement.classList.add(classToApply);
    
    /* pause between each new question and removes class correct or incorrect for new choices */
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

/* wrong answer */
scoreValueDecrease = num => {
  timedCount(num);
}

/** Timer functions **/
let c = 95; 
let t; 
let timer_is_on = 0;
//sets the count of the timer and penalizes for wwrong answer
timedCount = (num) => {
  if (num) {
    c -= num;
  }
  timerContainerEl.textContent = "Timer:" + c;
  score = c;
  c = c - 1;
  t = setTimeout(timedCount, 1000);
  if (c < 0) {
    stopCount();
  }
}

/* starts the timer */
function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

/* stops timer */
function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}
/* calls the function to start the game */
startGame();


//test
