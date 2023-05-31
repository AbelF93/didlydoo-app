import { deleteEvent } from "./deleteEvent.js";
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
		 function generateTable(){
			const eventTable = document.createElement("table");
			const attendeesColumn = document.createElement('tr');
			attendeesColumn.textContent = 'attendees';

			eventContainer.appendChild(eventTable);
			eventTable.appendChild(attendeesColumn);

			 console.log(event.dates);
			 const days = event.dates;
			days.forEach(date =>{
			console.log(date.date);
			console.log(date.attendees);
			const attendees = date.attendees;
			const dateCell = document.createElement('td');
			dateCell.textContent = date.date;
			attendeesColumn.appendChild(dateCell);
			 attendees.forEach(attendee =>{
				console.log(attendee.name);
				console.log(attendee.available);
				let attendeeName = document.createElement('tr');
				attendeeName.textContent = attendee.name;
				//eventTable.appendChild(attendeeName);
				let attendeeAvailability = document.createElement('td');
				attendeeAvailability.textContent = attendee.available;
				//attendeeName.appendChild(attendeeAvailability);
			 });
			});
			
			
			}
		 generateTable();
		
        });

        
      });
  } catch (error) {
    console.error("Error:", error);
  }
}

