import { testGameID as gameID } from "./create_new_game.js";
import display from "./display.js";
const urlAPI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`;

async function getScores(){
    console.log('runing getScores')
    const gameScores = await fetch (urlAPI)
    .then((response) => response.json())
    console.log('gameScores',gameScores.result)
    return gameScores;
}

export default getScores;