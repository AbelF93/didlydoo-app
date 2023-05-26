export function createForm(){
     //create Element for the form
     let eventContainer = document.querySelector("#createEvent-container");

     // create content for the form
     let content = `
    
     <form id="createEvent-form">
         <input type="text" id="createEvent-form-name" placeholder="name" required>
         <input type="date" id="createEvent-form-date" required>
         <input type="text" id="createEvent-form-author" placeholder="author" required>
         <input type="text" id="createEvent-form-description"  placeholder="description" required>
         <button type="submit" id="createEvent-button">Add Event</button>
     </form>
     `;
     eventContainer.innerHTML += content;
}