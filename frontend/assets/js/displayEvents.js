import { deleteEvent } from "./deleteEvent.js";
import { Table, generateTable } from "./generateTable.js";


export const eventItem = document.getElementsByClassName('event-item'); 

export function displayEventsInfo() {
  const eventList = document.getElementById("event-list");
  try {
    fetch("http://localhost:3000/api/events")
      .then((response) => response.json())
      .then((json) => {
        // Getting all event objects
        json.forEach((event) => {
          const eventContainer = document.createElement("div");
		  eventContainer.setAttribute('class','event-item');
          // eventContainer.setAttribute('class','event-item no-attendees');
          // let attendees = event.dates[i].attendees;
          console.log(json);

        

         /* if (event.dates[0].attendees !== ) {
            eventContainer.setAttribute('class','event-item attendees');
          } else {
            eventContainer.setAttribute('class','event-item no-attendees');
          }*/

          // Condition to apply a class to an event depending on whether there are attendees or not

          const eventName = document.createElement("h2");
          eventName.textContent = event.author + "'s " + event.name;
          eventName.setAttribute("class", "event-name");
          const eventDescription = document.createElement("p");
          eventDescription.textContent = event.description;
          eventDescription.setAttribute("class", "event-description");

          const idEvent = event.id;
          const deleteButton = document.createElement("button");
          deleteButton.classList.add("delete-button");
          deleteButton.textContent = "Delete";
          eventContainer.appendChild(deleteButton);

          deleteButton.addEventListener("click", () => {
            deleteEvent(idEvent);
          });
          console.log("id => " + event.id);
		  
          eventContainer.appendChild(eventName);
          eventContainer.appendChild(eventDescription);
          eventList.appendChild(eventContainer);
		  
		 //generate table
		 
         const eventTable = document.createElement("table");
         
         
          let tableRow = document.createElement("tr");
		  let attendeeRow = document.createElement("tr");
		  let attendeeRow2 = document.createElement("tr");
		  const dateCell = document.createElement('td');
		  let statusCell = document.createElement('td');
		  let statusCell2 = document.createElement('td');
          tableRow.textContent = "attendees";
          
          
           attendeeRow.textContent = 'attendee name';//attendeesArray[0].name          
           attendeeRow2.textContent = 'attendee name';//attendeesArray[1].name
           dateCell.textContent = 'YYY-MM-DD';//datesArray.date
           statusCell.textContent= 'availability' ;//attendeesArray[0].available
		   statusCell2.textContent= 'availability';//attendeesArray[1].available
		   
		   statusCell2.style.border= "solid";
		   statusCell.style.border= "solid"; 
         
         

         
         
         tableRow.appendChild(dateCell);
         attendeeRow.appendChild(statusCell);
         attendeeRow2.appendChild(statusCell2);
         eventTable.appendChild(tableRow);
         eventTable.appendChild(attendeeRow);
         eventTable.appendChild(attendeeRow2);
         eventContainer.appendChild(eventTable);
         dateCell.style.border= "solid";
         statusCell.style.border= "solid";
         attendeeRow.style.border= "solid";
		
        });

        
      });
  } catch (error) {
    console.error("Error:", error);
  }
}
