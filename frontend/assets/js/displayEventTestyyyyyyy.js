export function displayEvent() {
    // try {
    //   fetch("http://localhost:3000/api/events")
    //     .then((response) => response.json())
    //     .then((json) => {
    //       for (let i = 0; i < json.length; i++) {
    //         console.log(json[i].name)
    //       }
    //     });
    // } catch (error) {
    //   console.error("Error:", error);
    // }
    try {
        fetch("http://localhost:3000/api/attendees/")
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            console.log(json[0].name)
            console.log(json[0].events.dates)
            for (let i = 0; i < json.length; i++) {
            // console.log(json)
            //   console.log(json[].name)
            //   console.log(json[i].name)
            }
          });
      } catch (error) {
        console.error("Error:", error);
      }
  }