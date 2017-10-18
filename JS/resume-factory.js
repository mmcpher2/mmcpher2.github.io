


// Parsing string from local storage back into objects
const storedJobs = JSON.parse(localStorage.getItem("jobs"))

// Creating object to insert new HTML into current HTML
let jobsOut = document.getElementById("myJobs")

    for (let i = 0; i < storedJobs.length; i++) {
        let currentJob = storedJobs[i]
        jobsOut.innerHTML +=

            `<div class="blogPosts">
                <h4>${currentJob.title}</h4>            
                <p>${currentJob.company}</p>
                <p>${currentJob.datesemployed}</p>
                <p>${currentJob.location}</p>
                <p>${currentJob.description}</p>
                
            </div>`
    }