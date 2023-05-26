export function createEvent(){

    //create Element for the form
    let body =document.querySelector("body");
    let newDiv = document.createElement("div");
    newDiv.classList.add("createEvent-container");
    let buttonAdd = document.createElement("button");
    buttonAdd.setAttribute("id","createEvent-button");
    buttonAdd.textContent="Add an Event";
    newDiv.appendChild(buttonAdd);
    body.appendChild(newDiv);

    // create content for the form
    let content = `
    <div class="createEvent-form">
    <input type="text" id="createEvent-form-name" placeholder="name">
    <input type="date" id="createEvent-form-date">
    <input type="text" id="createEvent-form-author" placeholder="author">
    <input type="text" id="createEvent-form-description"  placeholder="description">
    </div>
     `;
     newDiv.innerHTML += content;

     let buttonAddClick = document.querySelector("#createEvent-button");

    // create function for POST date from form
    buttonAddClick.addEventListener("click", () => {
        let name = document.querySelector("#createEvent-form-name");
        let nameValue = name.value;
        console.log(nameValue);

        let date = document.querySelector("#createEvent-form-date");
        let dateValue = date.value;
        console.log(dateValue);

        let author = document.querySelector("#createEvent-form-author");
        let authorValue = author.value;
        console.log(authorValue);

        let description = document.querySelector("#createEvent-form-description");
        let descriptionValue = description.value;
        console.log(descriptionValue);


        try{
            fetch("http://localhost:3000/api/events/", {

            method: "POST",
        
            body: JSON.stringify({ 
              name: nameValue, 
              dates:  [dateValue], 
              author: authorValue, 
              description: descriptionValue }),
        
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));

        }catch(error){

            console.error("Error:", error);
        
        }

    })
};