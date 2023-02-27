import { attendees } from "./modules/data.js";
import { renderItems } from "./modules/render.js";

renderItems(attendees);


const inputEl = document.querySelector('.section__input');


inputEl.addEventListener ("keyup", (event) => {
    const searchTerm =event.target.value;

    const filteredResults = attendees.filter((attendees) =>
    attendees.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    
  );
   renderItems(filteredResults, "There are no results");
   
} )

inputEl.addEventListener()

