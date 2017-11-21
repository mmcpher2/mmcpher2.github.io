const home = require("./home-controller")
const contactInfo = require("./contact-controller")
const blogs = require("./blog-controller")

let navOutputEl = $("#navList")
module.exports = $(document).ready(function() {
    $.ajax({
        "url": "https://personalsite-6bb52.firebaseio.com/.json",
        "method": "GET"
    }).then(
        function (entireDB) {
            // NavBar - Grabbing the title on each key for the links on the nav bar.
            Object.keys(entireDB).forEach(function(key) {
                let navEls = $(`<li><a href="#">${entireDB[key].title}</a></li>`)
                navOutputEl.append(navEls)
            })
            // home - init homePage to populate homePage info
            home.init(entireDB.home)
            // blog - init blog function to populate blogs
            blogs.init(entireDB.blogs)
            // contactInfo - init contact function to populate contact info
            contactInfo.init(entireDB.contact)

        })
    })