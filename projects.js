
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

// Creating Objects of Objects

const projects = {
    "projectOne": projectOne,
    "projectTwo": projectTwo,
    "projectThree": projectThree
}
 
// Parsing and Storing the Data

const projectsString = JSON.stringify(projects)
localStorage.setItem("projects", projectsString)