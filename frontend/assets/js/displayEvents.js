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
          //cannot access the datas because it's not able to reach the dates and attendees's arrays
          console.log(json[i].dates[i].date);
          const datesArray = json[i].dates[i];
          const attendeesArray = datesArray.attendees;
          console.log(attendeesArray);
          const eventTable = document.createElement("table");

           let tableRow = document.createElement("tr");
           tableRow.textContent = "attendees";
           
           
          // attendeesArray.forEach(a {
          
            let attendeeRow = document.createElement("tr");
            attendeeRow.textContent = attendeesArray[0].name;

            let attendeeRow2 = document.createElement("tr");
            attendeeRow2.textContent = attendeesArray[1].name;
        //   });
          const dateCell = document.createElement('td');
          dateCell.textContent = datesArray.date;
   
          let statusCell = document.createElement('td');
          statusCell.textContent= attendeesArray[0].available;
          statusCell.style.border= "solid"; 

          let statusCell2 = document.createElement('td');
          statusCell2.textContent= attendeesArray[1].available;
          statusCell2.style.border= "solid";
       

          tableRow.appendChild(dateCell);
          attendeeRow.appendChild(statusCell);
          attendeeRow2.appendChild(statusCell2);
          eventTable.appendChild(tableRow);
          eventTable.appendChild(attendeeRow);
          eventTable.appendChild(attendeeRow2);
          dateCell.style.border= "solid";
          statusCell.style.border= "solid";
          attendeeRow.style.border= "solid";
          eventContainer.appendChild(eventTable); 
        
      }
      });
  } catch (error) {
    console.error("Error:", error);
  }
}
