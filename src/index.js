import './style.css';
import display from './modules/display.js';
import submitScore from './modules/submit_score.js';
import getScores from './modules/get_scores.js';

const scoresData = [
  { user: 'Peter1', score: 100 },
  { user: 'Peter1', score: 41 },
  { user: 'Peter1', score: 25 },
  { user: 'Peter1', score: 5 },
  { user: 'Peter1', score: 8 },
];

const btnRefresh = document.querySelector('#button-refresh');
const btnSubmit = document.querySelector('#button-submit');

btnSubmit.addEventListener('click', submitScore);
btnRefresh.addEventListener('click', getScores);

display(scoresData);
