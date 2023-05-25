// import { post } from "./postFetch.js";
// import { getFetch } from "./getFetch.js";
import { getFetchAttendees } from "./getFetchAttendees.js";

export function test() {
  let eventContainer = document.querySelector(".event-container");
  let inputEvent = document.querySelector(".event-input");
  let eventButton = document.querySelector(".event-button");

  eventButton.addEventListener("click", () => {
    let inputEventValue = inputEvent.value;
    let newDiv = document.createElement("div");
    let content = `${inputEventValue}`;
    newDiv.innerHTML += content;
    eventContainer.appendChild(newDiv);
    console.log(inputEventValue);
    // getFetch();
    // post(inputEventValue);
    getFetchAttendees(inputEventValue);
  });
}
