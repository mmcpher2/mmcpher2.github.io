module.exports = { "init": (function (blogData) {
        let blogOutputEl = $("#blog")
        blogData.content.forEach(function(blogPost) {
            // const blogSectionStart = $(`<section id="${blogPost.id}">`)
            // const blogTitle = $(`<h2>${blogPost.title}</h2>`)
            // const blogWeek = $(`<h4>${blogPost.week}</h4>`)
            // const blogBody = $(`<p>${blogPost.body}</p>`)
            // const blogSectionEnd = $(`</section>`)
            blogOutputEl.append($(`<section id="${blogPost.id}">`))
            blogOutputEl.append($(`<h2>${blogPost.title}</h2>`))
            blogOutputEl.append($(`<h4>${blogPost.week}</h4>`))
            blogOutputEl.append($(`<p>${blogPost.body}</p>`))
            blogOutputEl.append($("</section>"))
        })
    })
}
