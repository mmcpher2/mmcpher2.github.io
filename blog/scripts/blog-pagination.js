


{
// Had to pull string back out of local storage before paginating
const storedBlogs = JSON.parse(localStorage.getItem("blogArchiveString"))

const totalItems = storedBlogs.articles.length
const itemsPerPage = 5
const numberOfPages = Math.ceil(totalItems / itemsPerPage)
const paginationEl = document.getElementById("blogPaginator")
const blogEl = document.getElementById("blogDisplayer")

// Build the DOM string for the pagination links in the footer
let paginationString = "<ul class='paginatorBar'>"
paginationString += "<a id='previous' href='#'>&lt;</a>"
for (var i = 0; i < numberOfPages; i++) {
    paginationString += ` <p><a class="blogPage page-${i+1}" href="#">${i+1}</a></p>`
}
paginationString += " <a id='next' class='page-2' href='#'>&gt;</a>"
paginationString += "</ul>"

// Update the DOM with the unordered list we just built
paginationEl.innerHTML = paginationString

// Store references to the next and previous arrows we just added
const previousEl = document.getElementById("previous")
const nextEl = document.getElementById("next")

/*
    Function that will be invoked each time the user clicks
    on one of the pagination links at the bottom of the page
*/
function produceBlogs (event) {
    // Clear the blogs first before displaying the new ones
    blogEl.innerHTML = ""

    // Which number did the user click on?
    const pageNumber = parseInt(
        Array.from(event.target.classList)
        .find(clazz => {
            if (clazz.startsWith("page-")) return clazz
        })
        .split("-")[1]
    )

    // Change the class name of the previous arrow
    if ((pageNumber - 1) === 0) {
        previousEl.style.visibility = "hidden"
    } else {
        previousEl.style.visibility = "visible"
        previousEl.className = `page-${pageNumber - 1}`
    }

    // Change the class name of the next arrow
    if ((pageNumber + 1) > numberOfPages) {
        nextEl.style.visibility = "hidden"
    } else {
        nextEl.style.visibility = "visible"
        nextEl.className = `page-${pageNumber + 1}`
    }

    // Determine which items to display by slicing the array
    const itemsToDisplay = storedBlogs.articles.slice(
        (pageNumber - 1) * itemsPerPage, 
        pageNumber * itemsPerPage
    )

    // Display a <section> representation of each data object
    for (let i = 0; i < itemsToDisplay.length; i++) {
        let currentBlog = itemsToDisplay[i];
        blogEl.innerHTML += `
        <section class="boxy ${currentBlog.title}">
        <h3>"${currentBlog.title}"</h3>
        <h4>Post: ${currentBlog.id}</h4>
        <h5>${currentBlog.body}</h5>
        </section>
        `
    }
}

// Get the array of pagination anchor tags we added to the DOM
const blogLinks = document.getElementsByClassName("blogPage")

// Add event listeners to each <a> element in the pagination
for (let j = 0; j < blogLinks.length; j++) {
    let thisblogEl = blogLinks[j];
    thisblogEl.addEventListener("click", produceBlogs);
}

produceBlogs({
    "target": {
        "classList": ["page-1"]
    }
})

previousEl.addEventListener("click", produceBlogs)
nextEl.addEventListener("click", produceBlogs)
}