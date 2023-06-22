
const getGameID = async (object) => {
  const arrFromObj = object.result.split(' ');
  const result = arrFromObj[3];
  return result;
}

async function createNewGame() {
  const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  // first call the API
  const newGame = await fetch(urlAPI, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: 'Diego Vidal Game',
    }),
  })
    .then((response) => response.json()); // then get the ID of the new game

  const gameID = getGameID(newGame);
  // return the Id of the new Object
  return gameID;
}

const testGameID = 'kW68PZGsF4CTjYa0TPRr';

export { createNewGame, testGameID };