const contactInfo = require("./contact-controller")

module.exports = $(document).ready(function() {
    let navOutputEl = $("#navList")
    $.ajax({
        "url": "https://personalsite-6bb52.firebaseio.com/.json",
        "method": "GET"
    }).then(
        function (entireDB) {
            Object.keys(entireDB).forEach(function(key) {
                let navEls = $(`<li><a href="#">${entireDB[key].title}</a></li>`)
                navOutputEl.append(navEls)
            })
            contactInfo.init(entireDB.contact)
        })
    })