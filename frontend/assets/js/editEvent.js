export function editEvent(name, author, description) {
  let editEventDialog = document.querySelector("#edit-event-modal");
  let modal = document.querySelector("#edit-event-modal");

  let content = `
    <form id="createEvent-form-modale">
            <input type="text" id="createEvent-form-name-modale" value=${name} required>
            <input type="date" id="createEvent-form-date-modale" required>
            <input type="text" id="createEvent-form-author-modale" value=${author} required>
            <input type="text" id="createEvent-form-description-modale"  value=${description} required>
            <button type="submit" id="edit-event-button">Add Event</button>
    </form>
`;
  // console.log(name, author, description);
  editEventDialog.innerHTML += content;
  editEventDialog.style.display = "block";

  // submit edit event
  let editEventButton = document.querySelector("#edit-event-button");
  editEventButton.addEventListener("submit", () => {
    let nameModale = document.querySelector("#reateEvent-form-name-modale");
    let authorModale = document.querySelector("#reateEvent-form-author-modale");
    let descriptionModale = document.querySelector(
      "#reateEvent-form-description-modale"
    );

    console.log("click");

    fetch("http://localhost:3000/api/events", {
      method: "PATCH",
      body: JSON.stringify({
        name: nameModale,
        author: authorModale,
        description: descriptionModale,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log("submit");
    modal.closest();
  });
}
