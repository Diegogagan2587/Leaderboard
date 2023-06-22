const getGameID = async (object) => {
  const arrFromObj = object.result.split(' ');
  const result = arrFromObj[3];

  return result;
};

 
const createNewGame = async () => {
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
  });

  const response = await newGame.json();

  const gameID = getGameID(response);
  // return the Id of the new Object
  return gameID;
}

const testGameID = 'zCc9R3dmsr9pYokfcmgO';

export { createNewGame, testGameID };