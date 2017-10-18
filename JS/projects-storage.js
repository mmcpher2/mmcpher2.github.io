
// Creating array of Objects

const projects = []

// Creating Database Objects for Projects

const projectOne = {
    "title": "Ryan McPherson's Personal Webesite Project",
    "link": "https://github.com/mmcpher2/mmcpher2.github.io"
}

const projectTwo = {
    "title": "Overly Excited Project",
    "link": "https://github.com/mmcpher2/overlyexcited"
}

const projectThree = {
    "title": "Home Inventory Project",
    "link": "https://github.com/mmcpher2/homeInventory"
}

const projectFour = {
    "title": "CSS-Selectors",
    "link": "https://github.com/mmcpher2/css-selectors"
}

// pushing ojects into array

projects.push(projectOne, projectTwo, projectThree, projectFour)

// Parsing and Storing the Data

const projectsString = JSON.stringify(projects)
localStorage.setItem("projects", projectsString)