
const display = (scoreList) => {
    const scoresContainer = document.getElementById('scores-list');
    scoresContainer.innerHTML = '';

    scoreList.forEach((score) => {
        const newScore = document.createElement('li');
        newScore.innerHTML = `<span>${score.name}:</span>${score.score}`;
        scoresContainer.appendChild(newScore);
      });
}

export default display;