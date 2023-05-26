export function deleteEvent(id){

    try{
        fetch(`http://localhost:3000/api/events/${id}`, {

        method: "DELETE",

      })
    }catch(error){

        console.error("Error:", error);
    
    }

}