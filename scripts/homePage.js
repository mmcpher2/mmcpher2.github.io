module.exports = $(document).ready(function() {

    let navigationOutputEl = $("#my_story")
    let navList = []

    $.ajax({
        "url": "https://personalsite-6bb52.firebaseio.com/home.json",
        "method": "GET"
    }).then(function (homeData) {
        console.log(homeData)
        const homeTitle = $(`<h2>${homeData.content.title}</h2>`)
        const homeInfo = $(`<h2>${homeData.content.information}</h2>`)
        navigationOutputEl.append(homeTitle)
        navigationOutputEl.append(homeInfo)
    })
})