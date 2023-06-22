import { testGameID as gameID } from './create_new_game.js';
import display from './display.js';

const urlAPI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`;

async function getScores() {
  const gameScores = await fetch(urlAPI)
    .then((response) => response.json())
    .then((json) => json.result)
    .then((result) => display(result));

  return gameScores;
}

export default getScores;