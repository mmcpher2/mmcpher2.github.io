

// // Object of array of objects
// const blogs = [


// {
//     "id": "1",
//     "week": "week: 1",
//     "title": "I don't know what I don't know",
//     "body": "They still don't know that I have no idea what I'm doing. More updates to come..."
// },
// {
//     "id": "2",
//     "week": "week: 2",
//     "title": "Learned a local storage thing!",
//     "body": "I think that I'm starting to understand some of this stuff.  For instance, I am writing this blog body from a JS file instead of hard coding it into the HTML file! Pretty neat stuff."
// },
// {
//     "id": "3",    
//     "week": "week: 3",
//     "title": "Group Project after Group Project...",
//     "body": "After a week and a half of working through individual exercises and small personal projects, we were all thrown into groups of 4 or 5 to start our first group project on Wednesday. My first team was called the Jagged Ferrets, which is why we called our business Hobbs & Jills (The male and female ferret).  During this group project we styled first with a static header and footer, and then each person spent time working on their individual content within each page. No GIT problems, and a relatively smooth two days.  We had just wrapped up our first demo on Friday at noon when Steve threw us back into random groups to be finished by Wednesday morning.  This team was galled the Jackals's, also a great group.  Although our team meshed well, we were tasked by Steve to work on the data first, then structure, then styling... this caused some issues due the fact none of us really unserstand what a database should really look like, while styling is pretty understandable.  On top of this, with 4 hours to go on Tuesday, Steve told us to add a pagination bar at the bottom of our product page. AS WELL AS add 15 additional products.  We finished it with many bumps and bruises thanks to GIT and GitHub challended (Merge conflicts galore), but I think that I learned a lot, but don't necessarily feel like it after looking at the work of some other groups.  ALL GOOD, DON'T PANIC!",
// },
// {
//     "id": "4",    
//     "week": "week: 4",
//     "title": "Ignore the Noise",
//     "body": "One thing that I new coming in here was that my classmates would come with varying levels of experience and knowledge.  One thing that I have found difficult to ignore is when questions are asked during classroom live coding... I have no questions to ask, yet, it seems, that many others in the class have PLENTY to say and question.  I still firmly believe that not everyone is built that way, myself in particular, and that I would rather come up with questions and answers as I work on projects and excersized myself.  Not complaining, just acknowledging!",
// },
// {
//     "id": "5",    
//     "week": "week: 5",
//     "title": "Looking Ahead",
//     "body": "After spending much of the day learning about levels of scope in JS, Steve decided that it was time to show us where we were on our journey at NSS with a map drawing. It looks like we're going to be in for a rough ride: <img src="../imgs/blog_post_map.jpg">,
// },
// {
//     "id": "6",    
//     "week": "week: 6",
//     "title": "Coming Soon",
//     "body": "Coming Soon",
// },
// {
//     "id": "7",    
//     "week": "week: 7",
//     "title": "Coming Soon",
//     "body": "Coming Soon",
// },
// {
//     "id": "8",    
//     "week": "week: 8",
//     "title": "Coming Soon",
//     "body": "Coming Soon",
// },
// {
//     "id": "9",    
//     "week": "week: 9",
//     "title": "Coming Soon",
//     "body": "Coming Soon",
// },
// {
//     "id": "10",    
//     "week": "week: 10",
//     "title": "Coming Soon",
//     "body": "Coming Soon",
// }]
// }]


// //Created a constant variable holding the stringified array

// let blogArchiveString = JSON.stringify(blogs)

// // Stored the stringified array into local storage

// localStorage.setItem("blogArchiveString", blogArchiveString)

// // Parsing string from local storage back into objects
// const storedBlogs = JSON.parse(localStorage.getItem("blogArchiveString"))
