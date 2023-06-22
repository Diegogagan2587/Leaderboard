import { testGameID as gameID } from './create_new_game.js';

function submitScore(event) {
  // 1 get the name and score
  const apiURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
  const name = event.target.parentNode.querySelector('#your-name').value;
  const valueScore = event.target.parentNode.querySelector('#your-score').value;

  // 2 submit the info to the API

  fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: `${name}`,
      score: valueScore,
    }),
  })
    .then((response) => response.json());
}

export default submitScore;