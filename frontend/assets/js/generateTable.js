export function generateTable(){
    const eventItem = document.getElementsByClassName('')
		if(){
          console.log(json[i].dates[i].date);
     const datesArray = json[i].dates[i];
     const attendeesArray = datesArray.attendees;
     console.log(attendeesArray);
     const eventTable = document.createElement("table");
     
      let tableRow = document.createElement("tr");
      tableRow.textContent = "attendees";
      
     
       let attendeeRow = document.createElement("tr");
       attendeeRow.textContent = attendeesArray[0].name;
     
       let attendeeRow2 = document.createElement("tr");
       attendeeRow2.textContent = attendeesArray[1].name;
  
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
    }
      
