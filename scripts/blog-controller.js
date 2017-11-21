module.exports = { "init": (function (blogData) {
        let blogOutputEl = $("#blogs")
        blogData.content.forEach(function(blogPost) {
            blogOutputEl.append($(`<section id="${blogPost.id}">`))
            blogOutputEl.append($(`<h2>${blogPost.title}</h2>`))
            blogOutputEl.append($(`<h4>${blogPost.week}</h4>`))
            blogOutputEl.append($(`<p>${blogPost.body}</p>`))
            blogOutputEl.append($("</section>"))
        })
    })
}
