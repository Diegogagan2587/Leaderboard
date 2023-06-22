
const display = (scores) => {
    const scoresContainer = document.getElementById('scores-list');

    scores.forEach((score) => {
        const newScore = document.createElement('li');
        newScore.innerHTML = `<span>${score.name}:</span>${score.score}`;
        scoresContainer.appendChild(newScore);
      });
}

export default display;