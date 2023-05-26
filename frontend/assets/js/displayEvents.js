

export function displayEventsInfo() {
    const eventList = document.getElementById('event-list');
    try {
        fetch("http://localhost:3000/api/events")
          .then((response) => response.json())
          .then((json) => {
            //getting all event objects
           /* for (let i = 0; i < json.length; i++) {
              console.log(json[i].name);
              console.log(json[i].author);
              console.log(json[i].description);*/

              for(let i = 0;i< json.length;i++){
      
                let eventContainer = document.createElement("div");
                let eventName = document.createElement('h2');
                eventName.textContent = json[i].name;
                eventName.setAttribute('class','event-name');
                let eventAuthor = document.createElement('p');
                eventAuthor.setAttribute('class','event-author');
                eventAuthor.textContent = json[i].author;
                let eventDescription = document.createElement('p');
                eventDescription.textContent = json[i].description;
                eventDescription.setAttribute('class','event-description');
                
                eventContainer.appendChild(eventName);
                eventContainer.appendChild(eventAuthor);
                eventContainer.appendChild(eventDescription);
                eventList.appendChild(eventContainer);
              }
            
          });
      } catch (error) {
        console.error("Error:", error);
      }

 
}
  
 
  