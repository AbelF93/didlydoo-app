import { maxLengthInput } from "./maxLengthInput.js";

export function createForm() {
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

  let inputName = document.querySelector("#createEvent-form-name");
  inputName.addEventListener("input", () => {
    console.log("helloButton");
    maxLengthInput(inputName);
  });

  let inputAuthor = document.querySelector("#createEvent-form-author");
  inputAuthor.addEventListener("input", () => {
    console.log("helloButton");
    maxLengthInput(inputAuthor);
  });

  let inputDescription = document.querySelector("#createEvent-form-description");
  inputDescription.addEventListener("input", () => {
    console.log("helloButton");
    maxLengthInput(inputDescription);
  });
}
