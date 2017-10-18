

// Parsing string from local storage back into objects
const storedBlogs = JSON.parse(localStorage.getItem("blogArchiveString"))

// Creating object to insert new HTML into current HTML
let blogOut = document.getElementById("myBlogs")

    for (let i = 0; i < storedBlogs.length; i++) {
        let currentPost = storedBlogs[i]
        blogOut.innerHTML +=

            `<div class="blogPosts">
                <h4>${currentPost.Title}</h4>            
                <p>${currentPost.Week}</p>
                <p>${currentPost.Post}</p>
            </div>`
    }