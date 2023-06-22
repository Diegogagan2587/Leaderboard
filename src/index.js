import './style.css';
import display from './modules/display.js';
import submitScore from './modules/submit_score.js';
import getScores from './modules/get_scores.js';

const scoresData = [
  { user: 'No Score Yet', score: 0 },
];

const btnRefresh = document.querySelector('#button-refresh');
const btnSubmit = document.querySelector('#button-submit');

btnSubmit.addEventListener('click', submitScore);
btnRefresh.addEventListener('click', getScores);

display(scoresData);
