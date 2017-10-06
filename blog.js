
// Creating database objects for blog posts

const weekOne = {
    "Week": "1",
    "Post": "They still don't know that I have no idea what I'm doing. More updates to come..."
}

const weekTwo = {
    "Week": "2",
    "Post": ""
}

// Creating Objects of Objects

const blogPosts = {
    "weekOne": weekOne,
    "weekTwo": weekTwo
}

// Parsing and Storing the Data

const blogPostsString = JSON.stringify(blogPosts)
localStorage.setItem("blogPosts", blogPostsString)