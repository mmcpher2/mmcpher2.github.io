
{
    // Get the database from local storage, or empty object if null
    const storedBlogs = JSON.parse(
        localStorage.getItem("blogArchiveString")
    ) || {}

    // Create `articles` key if it doesn't exist
    storedBlogs.articles = storedBlogs.articles || []

    // Sort the articles by their `id` property, descending
    storedBlogs.articles.sort((p, n) => n.id - p.id)

    // Generator function definition
    const idGenerator = function* (from) {
        let id = 1
        while (true) {
            yield from + id
            id++
        }
    }

    const lastId = storedBlogs.articles[0] || { id: 0 }
    const articleUUIDGen = idGenerator(lastId.id)

    // Factory function for new articles
    const newArticleFactory = function (title, body) {
        return Object.create(null, {
            "id": {
                value: articleUUIDGen.next().value,
                enumerable: true
            },
            "title": {
                value: title,
                enumerable: true
            },
            "body": {
                value: body,
                enumerable: true
            }
        })
    }

    // Add click event listener to the save button
    const saveButtonEl = document.getElementById("articleForm__saveButton").addEventListener("click", event => {

            // Create a new article object
            const newArticle = newArticleFactory(
                document.querySelector("input[name='articleForm__title']").value,
                document.querySelector("textarea[name='articleForm__body']").value
            )

            // Add new article to array
            storedBlogs.articles.push(newArticle)

            // Sort the articles by their `id` property, descending
            storedBlogs.articles.sort((p, n) => n.id - p.id)
            
            // Serialize and store database
            localStorage.setItem("blogArchiveString", JSON.stringify(storedBlogs))
        })
}

