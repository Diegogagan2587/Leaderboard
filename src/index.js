import './style.css';
import display from './modules/display.js';
import submitScore from './modules/submit_score.js';


const scoresData = [
  { name: 'name', score: 100 },
  { name: 'name', score: 1 },
  { name: 'name', score: 4 },
  { name: 'name', score: 5 },
  { name: 'name', score: 4 },
];

const btnRefresh = document.querySelector('#button-refresh');
const btnSubmit = document.querySelector('#button-submit');

btnSubmit.addEventListener('click',submitScore);

display(scoresData);


