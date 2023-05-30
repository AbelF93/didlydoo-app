export function editEvent(name, author, description) {
  let editEventDialog = document.querySelector("#edit-event-modal");

  let content = `
    <form id="createEvent-form">
            <input type="text" id="createEvent-form-name" value=${name} required>
            <input type="date" id="createEvent-form-date" required>
            <input type="text" id="createEvent-form-author" value=${author} required>
            <input type="text" id="createEvent-form-description"  value=${description} required>
            <button type="submit" id="edit-event-button">Add Event</button>
    </form>
`;
  console.log(name, author, description);
  editEventDialog.innerHTML += content;
  editEventDialog.style.display = "block";

  // submit edit event
  let editEventButton = document.querySelector("#edit-event-button");
  editEventButton.addEventListener("submit", () => {
    console.log("submit");
  });
}
