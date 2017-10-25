

// Empty array

const blogs = []

// Creating database objects for blog posts

const weekOne = {
    "Week": "Week: 1",
    "Title": "I don't know what I don't know",
    "Post": "They still don't know that I have no idea what I'm doing. More updates to come..."
}

const weekTwo = {
    "Week": "Week: 2",
    "Title": "Learned a local storage thing!",
    "Post": "I think that I'm starting to understand some of this stuff.  For instance, I am writing this blog post from a JS file instead of hard coding it into the HTML file! Pretty neat stuff."
}

const weekThree = {
    "Week": "Week: 3",
    "Title": "Group Project after Group Project...",
    "Post": "After a week and a half of working through individual exercises and small personal projects, we were all thrown into groups of 4 or 5 to start our first group project on Wednesday. My first team was called the Jagged Ferrets, which is why we called our business Hobbs & Jills (The male and female ferret).  During this group project we styled first with a static header and footer, and then each person spent time working on their individual content within each page. No GIT problems, and a relatively smooth two days.  We had just wrapped up our first demo on Friday at noon when Steve threw us back into random groups to be finished by Wednesday morning.  This team was galled the Jackals's, also a great group.  Although our team meshed well, we were tasked by Steve to work on the data first, then structure, then styling... this caused some issues due the fact none of us really unserstand what a database should really look like, while styling is pretty understandable.  On top of this, with 4 hours to go on Tuesday, Steve told us to add a pagination bar at the bottom of our product page. AS WELL AS add 15 additional products.  We finished it with many bumps and bruises thanks to GIT and GitHub challended (Merge conflicts galore), but I think that I learned a lot, but don't necessarily feel like it after looking at the work of some other groups.  ALL GOOD, DON'T PANIC!",
}
const weekFour = {
    "Week": "Week: 4",
    "Title": "Ignore the Noise",
    "Post": "One thing that I new coming in here was that my classmates would come with varying levels of experience and knowledge.  One thing that I have found difficult to ignore is when questions are asked during classroom live coding... I have no questions to ask, yet, it seems, that many others in the class have PLENTY to say and question.  I still firmly believe that not everyone is built that way, myself in particular, and that I would rather come up with questions and answers as I work on projects and excersized myself.  Not complaining, just acknowledging!",
}
const weekFive = {
    "Week": "Week: 5",
    "Title": "Coming Soon",
    "Post": "Coming Soon",
}
const weekSix = {
    "Week": "Week: 6",
    "Title": "Coming Soon",
    "Post": "Coming Soon",
}
const weekSeven = {
    "Week": "Week: 7",
    "Title": "Coming Soon",
    "Post": "Coming Soon",
}
const weekEight = {
    "Week": "Week: 8",
    "Title": "Coming Soon",
    "Post": "Coming Soon",
}
const weekNine = {
    "Week": "Week: 9",
    "Title": "Coming Soon",
    "Post": "Coming Soon",
}
const weekTen = {
    "Week": "Week: 10",
    "Title": "Coming Soon",
    "Post": "Coming Soon",
}

// Pushing objects into array

blogs.push(weekOne, weekTwo, weekThree, weekFour, weekFive, weekSix, weekSeven, weekEight, weekNine, weekTen)

//Created a constant variable holding the stringified array

let blogArchiveString = JSON.stringify(blogs)

// Stored the stringified array into local storage

localStorage.setItem("blogArchiveString", blogArchiveString)

// Parsing string from local storage back into objects
const storedBlogs = JSON.parse(localStorage.getItem("blogArchiveString"))
