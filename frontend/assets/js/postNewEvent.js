export function postNewEvent(name) {
  const nameData = name;

  console.log("P O S T " + nameData);

  fetch("http://localhost:3000/api/events/", {
    method: "POST",

    body: JSON.stringify({
      author: nameData,
      name: nameData,
      description: nameData,
      dates: ["1994-10-27"],
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  //postAttendees
  // fetch("http://localhost:3000/api/attendees/", {
  //   method: "POST",

  //   body: JSON.stringify({
  //     attendees: nameData,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
}
