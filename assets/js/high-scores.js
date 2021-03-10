//creates a const connecting to <ul> for <li> high scores
const highScoresList = document.getElementById('highScoresList');
//same as end-game.js if there is scores in localstorage parse and set to highScores array, else empty array
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

/* the highScoresList<ul> innerHTML is set to highScores.map which allows you to change array items
in this case to a list item with a class of high-score that has the name and score to set to the high score list  */
highScoresList.innerHTML = highScores.map(score => {
  return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
  .join("");
//join object array elements into a string for the innerHTML

//clears localstorage and resets the highScoreList.innerHTML
clearHighScore = (event) => {
  localStorage.clear();
  highScoresList.innerHTML = "";
}