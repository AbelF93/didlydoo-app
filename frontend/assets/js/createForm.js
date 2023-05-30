import { maxLengthInput } from "./maxLengthInput.js";

export function createForm() {

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
