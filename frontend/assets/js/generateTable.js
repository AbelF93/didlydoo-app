
export const Table = document.querySelector('table');
export function generateTable(){      
      /*  const datesArray = json[i].dates[i];
         const attendeesArray = datesArray.attendees;
           
              //console.log(nameValue);*/
        const eventContainer = document.getElementsByClassName('event-item');
         const eventTable = document.createElement("table");
         
         
          let tableRow = document.createElement("tr");
          tableRow.textContent = "attendees";
          
           let attendeeRow = document.createElement("tr");
           attendeeRow.textContent = 'attendee name';//attendeesArray[0].name
         
           let attendeeRow2 = document.createElement("tr");
           attendeeRow2.textContent = 'attendee name';//attendeesArray[1].name
      
         const dateCell = document.createElement('td');
         dateCell.textContent = 'YYY-MM-DD';//datesArray.date
         
         let statusCell = document.createElement('td');
         statusCell.textContent= 'availability' ;//attendeesArray[0].available
         statusCell.style.border= "solid"; 
         
         let statusCell2 = document.createElement('td');
         statusCell2.textContent= 'availability';//attendeesArray[1].available
         statusCell2.style.border= "solid";
         
         
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
        }
