// import { format } from 'date-fns';

export function createEvent(){

    //create Element for the form
    let body = document.querySelector("body");
    let newDiv = document.createElement("div");
    newDiv.classList.add("createEvent-container");
    body.appendChild(newDiv);

    // create content for the form
    let content = `
    <div class="createEvent-form">
    <form id="createEvent-form">
        <input type="text" id="createEvent-form-name" placeholder="name" required>
        <input type="date" id="createEvent-form-date" required>
        <input type="text" id="createEvent-form-author" placeholder="author" required>
        <input type="text" id="createEvent-form-description"  placeholder="description" required>
        <button type="submit" id="createEvent-button">Add Event</button>
    </form>
    </div>
    `;
    newDiv.innerHTML += content;

    let createEventForm = document.querySelector("#createEvent-form");

    // create function for POST date from form
    createEventForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let name = document.querySelector("#createEvent-form-name");
        let nameValue = name.value;
        console.log("name => " + nameValue);

        let date = document.querySelector("#createEvent-form-date");
        let dateValue = date.value;
        console.log("date => " + dateValue);

        let author = document.querySelector("#createEvent-form-author");
        let authorValue = author.value;
        console.log("author => " + authorValue);

        let description = document.querySelector("#createEvent-form-description");
        let descriptionValue = description.value;
        console.log("description => " + descriptionValue);

        try {
            fetch("http://localhost:3000/api/events/", {
                method: "POST",
                body: JSON.stringify({ 
                    name: nameValue, 
                    dates:  [dateValue], 
                    author: authorValue, 
                    description: descriptionValue 
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
    });
};