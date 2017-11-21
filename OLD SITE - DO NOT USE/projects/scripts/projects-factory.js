

// Parsing string from local storage back into objects
const storedProjects = JSON.parse(localStorage.getItem("projects"))

// Creating object to insert new HTML into current HTML
let projectsOut = document.getElementById("myProjects")

    for (let i = 0; i < storedProjects.length; i++) {
        let currentProject = storedProjects[i]
        projectsOut.innerHTML +=

            `<div class="projects">
               <ul> 
                  <li><h4><a href="${currentProject.link}">${currentProject.title}</a></h4></li>
               </ul>                
            </div>`
    }