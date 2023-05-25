export function getFetch() {
  //  fetch("http://localhot:3000/api/events")
  //  .then((response) => response.json())
  //.then((json) => console.log(json));

  //A list of all the events
  fetch("http://localhost:3000/api/events")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.log("erreur");
    });
  // A single event
  fetch("http://localhost:3000/api/events/f5b6564b5dc4")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.log("erreur");
    });
  //Get a list of all the attendees, and the events they're attending
  fetch("http://localhost:3000/api/attendees/ ")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.log("erreur");
    });
  //   Get all attendances for a given name
  fetch("http://localhost:3000/api/attendees/Michou ")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => {
      console.log("erreur");
    });
}
