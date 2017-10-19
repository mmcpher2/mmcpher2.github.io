

const totalItems = storedBlogs.length
const itemsPerPage = 1
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
        previousEl.style.display = "none"
    } else {
        previousEl.style.display = "inline"
        previousEl.className = `page-${pageNumber - 1}`
    }

    // Change the class name of the next arrow
    if ((pageNumber + 1) > numberOfPages) {
        nextEl.style.display = "none"
    } else {
        nextEl.style.display = "inline"
        nextEl.className = `page-${pageNumber + 1}`
    }

    // Determine which items to display by slicing the array
    const itemsToDisplay = storedBlogs.slice(
        (pageNumber - 1) * itemsPerPage, 
        pageNumber * itemsPerPage
    )

    // Display a <section> representation of each data object
    for (let i = 0; i < itemsToDisplay.length; i++) {
        let currentBlog = itemsToDisplay[i];
        blogEl.innerHTML += `
        <section class="${currentBlog.Title}">
        <h2>"${currentBlog.Title}"</h1>
        <h4>${currentBlog.Week}</h4>
        <h4>${currentBlog.Post}</h4>
        </section>
        `
    }
}

// Get the array of pagination anchor tags we added to the DOM
const blogLinks = document.getElementsByClassName("blogPage")

// Add event listeners to each <a> element in the pagination
for (let j = 0; j < blogLinks.length; j++) {
    let thisblogEl = blogLinks[j];
    thisblogEl.addEventListener("click", produceBlogs, false);
}

produceBlogs({
    "target": {
        "classList": ["page-1"]
    }
})

previousEl.addEventListener("click", produceBlogs)
nextEl.addEventListener("click", produceBlogs)