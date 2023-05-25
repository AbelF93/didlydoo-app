export function test() {
  let eventContainer = document.querySelector(".event-container");
  let inputEvent = document.querySelector(".event-input");
  let inputEventValue = inputEvent.value;
  let eventButton = document.querySelector(".event-button");

  eventButton.addEventListener("click", () => {
    let newDiv = document.createElement("div");
    let content = `${inputEventValue}`;
    newDiv.innerHTML += content;
    eventContainer.appendChild(newDiv);
    console.log(inputEventValue);
  });
}
