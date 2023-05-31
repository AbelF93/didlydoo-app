import { deleteEvent } from "./deleteEvent.js";
import { generateTable2 } from "./generateTable.js";

export function displayEventsInfo() {
  const eventList = document.getElementById("event-list");
  try {
    fetch("http://localhost:3000/api/events")
      .then((response) => response.json())
      .then((json) => {
        // Getting all event objects
        json.forEach((event) => {
          const eventContainer = document.createElement("div");
          console.log(event.dates.attendees);
          // eventContainer.setAttribute('class','event-item no-attendees');
          // let attendees = event.dates[i].attendees;
          console.log(json);

          /*const events = json;
          const lastEvent = events.slice(-1)[0];
          const beforeLastEvent = events.slice(-2)[0];
          console.log(lastEvent);

          if (event.dates.attendees !== "") {
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
        });

        // generateTable2();
      });
  } catch (error) {
    console.error("Error:", error);
  }
}
