async function getGameID(object) {
  console.log(`running getGameID(${object})`)
  let result = object.result.split(' ');
  result = result[3];
  console.log('result = ',result);
  return result
}

async function createNewGame(){
  const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'
  //first call the API
  const newGame = await fetch(urlAPI,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: "Diego Vidal Game"
    })
  })
  .then( (response) => response.json() )  //then get the ID of the new game
  console.log(newGame)
  const gameID = getGameID(newGame);
    //return the Id of the new Object
  return gameID;
}

export default createNewGame;