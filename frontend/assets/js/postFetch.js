export function postFetch(value) {

    console.log("Valeur recupérer "+ value );

  fetch("http://localhost:3000/", {
    method: "POST",

    body: JSON.stringify({
      title: "test",
      body: value,
    }),

    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
