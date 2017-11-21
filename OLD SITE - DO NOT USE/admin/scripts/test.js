

// Are there any articles? If so, add articles to DOM
if (ProfessionalDatabase.articles.length) {
    const projectsEl = document.getElementById("blog__articles")

    // For displaying single articles
    const updateDOM = (article) => {
        projectsEl.innerHTML += `
        <article class="article article-${article.id}">
            <section class="article__title">
                ${article.title}
            </section>
            <section class="article__body">
                ${article.body}
            </section>
        </article>
        `
    }

    /*
        Sort the articles by id, descending, and inject
        into the DOM
    */
    const displayArticles = () => {
        projectsEl.innerHTML = ""

        ProfessionalDatabase.articles
            .sort((p, n) => n.id - p.id)
            .forEach(function (article) {
                updateDOM(article)
            })
    }
    displayArticles()


    document.querySelector("input[name='articleFilter']").addEventListener(
        "keyup",
        event => {
            if (event.target.value.length >= 3) {
                // Filter all the things
                const userFilterString = event.target.value.toLowerCase()

                const filteredArticles = ProfessionalDatabase.articles.filter(
                    article => {
                        return article.title.toLowerCase().includes(userFilterString) ||
                               article.body.toLowerCase().includes(userFilterString)
                    }
                )

                // Clear the DOM first
                projectsEl.innerHTML = ""

                // Display only filtered articles
                filteredArticles.forEach( article => updateDOM(article) )
            } else {
                displayArticles()
            }
        }
    )
}