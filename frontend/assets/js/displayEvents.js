

export function displayEventsInfo() {
    try {
        fetch("http://localhost:3000/api/events")
          .then((response) => response.json())
          .then((json) => {
            for (let i = 0; i < json.length; i++) {
              console.log(json[i].name);
              console.log(json[i].author);
              console.log(json[i].description);
            }
          });
      } catch (error) {
        console.error("Error:", error);
      }
    }

  
 
  