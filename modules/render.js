

export const renderItems = (attendees, fallbackMessage = "No results") => {
    const tableBodyEl = document.querySelector(".table__body")
    

    tableBodyEl.innerHTML ="";

    attendees.forEach((attendees) => {
        const tableRowEl = document.createElement("tr");
        tableRowEl.className = "table__row"

        const tableIdEl = document.createElement("td");
        tableIdEl.className = "table__data"
        tableIdEl.innerText = attendees.id

         const tableNameEl = document.createElement("td");
        tableNameEl.className = "table__data"
        tableNameEl.innerText = attendees.name

        const tableSurnameEl = document.createElement("td");
        tableSurnameEl.className = "table__data"    
        tableSurnameEl.innerText = attendees.surname

         const tableAgeEl = document.createElement("td");
        tableAgeEl.className = "table__data"
        tableAgeEl.innerText = attendees.age
        




        tableBodyEl.appendChild(tableRowEl);
        tableBodyEl.appendChild(tableIdEl);
        tableBodyEl.appendChild(tableNameEl);
        tableBodyEl.appendChild(tableSurnameEl);
        tableBodyEl.appendChild(tableAgeEl);

    });
}