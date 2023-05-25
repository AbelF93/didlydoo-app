export function getFetchAttendees(name) {
  fetch(`http://localhost:3000/api/attendees/${name}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.log("erreur");
    });
}
