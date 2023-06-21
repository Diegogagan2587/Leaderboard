import './style.css';

const scoresData = [
    {name:'name', score: 100},
    {name:'name', score: 1},
    {name:'name', score: 4},
    {name:'name', score: 5},
    {name:'name', score: 4}
]

const scoresContainer = document.getElementById('scores-list');

scoresData.forEach(score => {
    const newScore = document.createElement('li');
    newScore.innerHTML = `<span>${score.name}:</span>${score.score}`;
    scoresContainer.appendChild(newScore);
});