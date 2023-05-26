// import { post } from "./postFetch.js";
// import { getFetch } from "./getFetch.js";
import { getFetchAttendees } from "./getFetchAttendees.js";
import { postNewEvent } from "./postNewEvent.js";

export function test() {

  let inputEvent = document.querySelector(".event-input");
  let eventButton = document.querySelector(".event-button");

  eventButton.addEventListener("click", () => {

    console.log(inputEventValue);
    // getFetch();
    // post(inputEventValue);
    // getFetchAttendees(inputEventValue);
    //postNewEvent(inputEventValue);
  });
}
