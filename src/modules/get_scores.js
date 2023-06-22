import { testGameID as gameID } from './create_new_game.js';
import display from './display.js';

const urlAPI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`;

const getScores = async () => {
  const gameScores = await fetch(urlAPI)
  const response = await gameScores.json();
  const result = await response.result;
  display(result);
  return gameScores;
};

export default getScores;