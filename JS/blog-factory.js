

// Empty array

const blogs = []

// Creating database objects for blog posts

const weekOne = {
    "Week": " Week: 1",
    "Title": "Title: I don't know what I don't know",
    "Post": "They still don't know that I have no idea what I'm doing. More updates to come..."
}

const weekTwo = {
    "Week": "Week: 2",
    "Title": "Title: Learned a local storage thing!",
    "Post": "I think that I'm starting to understand some of this stuff.  For instance, I am writing this blog post from a JS file instead of hard coding it into the HTML file! Pretty neat stuff."
}

const weekThree = {
    "Week": "Week: 3",
    "Title": "Title: Group Project after Group Project...",
    "Post": "After a week and a half of working through individual exercises and small personal projects, we were all thrown into groups of 4 or 5 to start our first group project on Wednesday. My first team was called the Jagged Ferrets, which is why we called our business Hobbs & Jills (The male and female ferret).  During this group project we styled first with a static header and footer, and then each person spent time working on their individual content within each page. No GIT problems, and a relatively smooth two days.  We had just wrapped up our first demo on Friday at noon when Steve threw us back into random groups to be finished by Wednesday morning.  This team was galled the Jackals's, also a great group.  Although our team meshed well, we were tasked by Steve to work on the data first, then structure, then styling... this caused some issues due the fact none of us really unserstand what a database should really look like, while styling is pretty understandable.  On top of this, with 4 hours to go on Tuesday, Steve told us to add a pagination bar at the bottom of our product page. AS WELL AS add 15 additional products.  We finished it with many bumps and bruises thanks to GIT and GitHub challended (Merge conflicts galore), but I think that I learned a lot, but don't necessarily feel like it after looking at the work of some other groups.  ALL GOOD, DON'T PANIC!",
}

// Pushing objects into array

blogs.push(weekOne, weekTwo, weekThree)

//Created a constant variable holding the stringified array

let blogArchiveString = JSON.stringify(blogs)

// Stored the stringified array into local storage

localStorage.setItem("blogArchiveString", blogArchiveString)

