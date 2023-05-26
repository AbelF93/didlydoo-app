

export function displayEventsInfo() {
    //display the events and their contents
    fetch("http://localhost:3000/api/events")
      .then((response) => response.json())
      .then((json) => {
        //looping through the events
        for(let e in json){
            console.log(json[e]);}})
      .catch((error) => {
        console.log("erreur");
      });
  }
  