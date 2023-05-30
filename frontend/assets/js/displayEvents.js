import { deleteEvent } from "./deleteEvent.js";

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
          //Cette fonction pue la mort
          // deleteButton.addEventListener("click",deleteEvent(idEvent));
          deleteButton.addEventListener("click", () => {
            deleteEvent(idEvent);
          });
          console.log("id => " + json[i].id);

          eventContainer.appendChild(eventName);
          eventContainer.appendChild(eventDescription);
          eventList.appendChild(eventContainer);

          //create a table with the elements
          console.log(json[i].dates[i].date);
          const datesArray = json[i].dates[1].date;
          const eventTable = document.createElement("table");

           const tableRow = document.createElement("tr");
           tableRow.textContent ="attendee";
           const tableRow2 = document.createElement("tr");
           tableRow2.textContent = "attendee1";
         // const Rows= document.querySelectorall("tr");
          
          const headerCell = document.createElement('td');
          headerCell.textContent = datesArray;
          tableRow.appendChild(headerCell);
          eventTable.appendChild(tableRow);
          eventTable.appendChild(tableRow2);
          headerCell.style.border= "solid";
          eventTable.style.border= "solid";
          eventContainer.appendChild(eventTable);
          
          
        
      }
        

      });
  } catch (error) {
    console.error("Error:", error);
  }
}
