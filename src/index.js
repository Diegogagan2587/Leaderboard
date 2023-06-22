import './style.css';
import display from './modules/display.js';
import  createNewGame  from './modules/create_new_game.js';

const scoresData = [
  { name: 'name', score: 100 },
  { name: 'name', score: 1 },
  { name: 'name', score: 4 },
  { name: 'name', score: 5 },
  { name: 'name', score: 4 },
];

createNewGame();
display(scoresData);


