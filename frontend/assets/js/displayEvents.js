

export function displayEventsInfo() {
    const eventList = document.getElementById('event-list');
    try {
        fetch("http://localhost:3000/api/events")
          .then((response) => response.json())
          .then((json) => {
            //getting all event objects
              for (let i = 0; i < json.length; i++) {
                  let a = json[i];
                  console.log(a.name);
                  console.log(a.author);
                  console.log(a.description);
                  for (let j = 0 ; j < a.dates.length; j++){
                    let day = a.dates[j];
                    console.log(day.date); 
                    for (let atd = 0 ; atd < day.attendees.length ; atd ++){
                        let eventAttendees = day.attendees[atd];
                        console.log("attendees: " + eventAttendees.name);
                        console.log("available: " + eventAttendees.available);
                    }  
                  }
                  ;}
                  
                
              for(let i = 0;i< json.length;i++){
      
                let eventContainer = document.createElement("div");
                let eventName = document.createElement('h2');
                eventName.textContent = json[i].author + "'s " + json[i].name;
                eventName.setAttribute('class','event-name');
                let eventDescription = document.createElement('p');
                eventDescription.textContent = json[i].description;
                eventDescription.setAttribute('class','event-description');
                
                eventContainer.appendChild(eventName);
                eventContainer.appendChild(eventDescription);
                eventList.appendChild(eventContainer);
                
                //create a table with the elements
                const eventTable =document.createElement('table');
                const eventCoreTable = document.createElement('tbody');
                //generate cells
                for (let r = 0; r < 3; r++ ){
                    const row= document.createElement('tr');
                }

              }
            
          });
      } catch (error) {
        console.error("Error:", error);
      }

 
}
  
 
  