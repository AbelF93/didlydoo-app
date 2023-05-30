export function editEvent(id, name, author, description) {
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
  let editEventForm = document.querySelector("#createEvent-form-modale");
  editEventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let nameModale = document.querySelector(
      "#createEvent-form-name-modale"
    ).value;
    let authorModale = document.querySelector(
      "#createEvent-form-author-modale"
    ).value;
    let descriptionModale = document.querySelector(
      "#createEvent-form-description-modale"
    ).value;

    console.log(nameModale, authorModale, descriptionModale);

    try {
      fetch(`http://localhost:3000/api/events/${id}`, {
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
    } catch (error) {
      console.error("Error:", error);
    }

    console.log("submit");
    modal.close();
  });
}
