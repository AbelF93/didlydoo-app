import { deleteEvent } from "./deleteEvent.js";
import { generateTable2 } from "./generateTable.js";


export function displayEventsInfo() {
  const eventList = document.getElementById("event-list");
  try {
    fetch("http://localhost:3000/api/events")
      .then((response) => response.json())
      .then((json) => {
        //getting all event objects
        for (let i = 0; i < json.length; i++) {
          let a = json[i];
          // console.log(a.name);
          // console.log(a.author);
          // console.log(a.description);
          for (let j = 0; j < a.dates.length; j++) {
            let day = a.dates[j];
            // console.log(day.date);
            for (let atd = 0; atd < day.attendees.length; atd++) {
              let eventAttendees = day.attendees[atd];
              // console.log("attendees: " + eventAttendees.name);
              // console.log("available: " + eventAttendees.available);
            }
          }
        }
		
        for (let i = 0; i < json.length; i++) {
          let eventContainer = document.createElement("div");
		  console.log(json[i].dates[i]);
		  //eventContainer.setAttribute('class','event-item no-attendees');
		  let attendees = json[i].dates[i].attendees;
		  console.log(json);

		  let events = json;
		  let lastEvent = events.slice(-1)[0];
		  let beforeLastEvent = events.slice(-2)[0];
		  console.log(lastEvent);
		  
		  if(events[i] == lastEvent || events[i] == beforeLastEvent) {
			  eventContainer.setAttribute('class','event-item attendees');
			} else{
			  eventContainer.setAttribute('class','event-item no-attendees');
			}

		  //condition to apply a class to an event depending of if there is an attendees or not
		  
          let eventName = document.createElement("h2");
          eventName.textContent = json[i].author + "'s " + json[i].name;
          eventName.setAttribute("class", "event-name");
          let eventDescription = document.createElement("p");
          eventDescription.textContent = json[i].description;
          eventDescription.setAttribute("class", "event-description");

          let idEvent = json[i].id;
          let deleteButton = document.createElement("button");
          deleteButton.classList.add("delete-button");
          deleteButton.textContent = "Delete";
          eventContainer.appendChild(deleteButton);

          deleteButton.addEventListener("click", () => {
            deleteEvent(idEvent);
          });
          console.log("id => " + json[i].id);

          eventContainer.appendChild(eventName);
          eventContainer.appendChild(eventDescription);
          eventList.appendChild(eventContainer);
		  
		  
      }
      });
  } catch (error) {
    console.error("Error:", error);
  }
}
