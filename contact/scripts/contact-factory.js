


// Parsing string from local storage back into objects
const storedContacts = JSON.parse(localStorage.getItem("contactInfo"))

// Creating object to insert new HTML into current HTML
let contactsOut = document.getElementById("myContactInfo")

    for (let i = 0; i < storedContacts.length; i++) {
        let currentContacts = storedContacts[i]
        contactsOut.innerHTML +=

            `<div class="contactsInfo">
                <h4>${currentContacts.type}</h4>            
                <p>${currentContacts.name}</p>
            </div>`
    }