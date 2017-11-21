module.exports = { "init": (function (homeData) {
        let navigationOutputEl = $("#my_story")
        navigationOutputEl.append($(`<h2>${homeData.content.title}</h2>`))
        navigationOutputEl.append($(`<h4>${homeData.content.information}</h4>`))
    })
}