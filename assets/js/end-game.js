/* save high score names */
const username = document.getElementById("userName");
/* save score button */ 
const saveScoreBtnEl = document.getElementById("saveScoreBtn");
/* <p> containing the final score */
const finalScore = document.getElementById("finalScore");
//gets the mostRecentScore from local storage
const mostRecentScore = localStorage.getItem("mostRecentScore");
//sets score to the inner text of the <p>
finalScore.innerText = mostRecentScore;
//gets any scores already in local storage and parses them or if there are none, sets empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//only save 5 scores
const topFiveScores = 5;

/* only lets the user submit if there is text in the input field */
username.addEventListener("keyup", () => {
  saveScoreBtnEl.disabled = !username.value;
});

/* onclick event on the submit high score button */
saveHighScore = (event) => {
  event.preventDefault();
  /* takes the most recent score and the input field username sets it to score object
  then pushes into the highScores */
  const score = {
    score: mostRecentScore,
    name: username.value
  };
  highScores.push(score);

  //sorts through the scores and creates descending order
  /* on arrays there is implicit return 
  so this: highScores.sort((a, b) => {
    return b.score - a.score;
  }) becomes: */
  highScores.sort((a, b) => b.score - a.score);
  //the five highest scores in the array are kept after sorting
  highScores.splice(5);
  //the highScores array is strigified to localStorage 
  localStorage.setItem('highScores', JSON.stringify(highScores));
  //then go to the high scores page
  window.location.assign("../high-scores.html");
}