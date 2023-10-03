console.log("llo");

fetch("https://valorant-api.com/v1/agents")
.then(response => response.json())
.then(json => {
    for(const data of json.data) {
        if(data.isPlayableCharacter === true){
            console.log(data.displayName);
        }
    }
});