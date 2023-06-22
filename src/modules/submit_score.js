import { testGameID as gameID } from "./create_new_game.js";

function submitScore(event){
    console.log(`runing submitScore(${event.target})`)
    //1 get the name and score
    const apiURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
    const name = event.target.parentNode.querySelector('#your-name').value;
    const score = event.target.parentNode.querySelector('#your-score').value;
    console.log(name);
    console.log(score);
    //2 submit the info to the API
    console.log(apiURL)
    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify ({
            "user":`${name}`,
            "score":score
        })
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default submitScore;