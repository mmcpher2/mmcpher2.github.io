module.exports = { "init": (function (homeData) {
        let navigationOutputEl = $("#my_story")
        const homeTitle = $(`<h2>${homeData.content.title}</h2>`)
        const homeInfo = $(`<h4>${homeData.content.information}</h4>`)
        navigationOutputEl.append(homeTitle)
        navigationOutputEl.append(homeInfo)
    })
}