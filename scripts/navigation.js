const home = require("./home-controller")
const contactInfo = require("./contact-controller")
const blogs = require("./blog-controller")
const projects = require("./projects-controller")
const jobs = require("./resume-controller")
const pageShow = require("./pageShow")

let navOutputEl = $("#navList")
module.exports = $(document).ready(function() {
    $.ajax({
        "url": "https://personalsite-6bb52.firebaseio.com/.json",
        "method": "GET"
    }).then(
        function (entireDB) {
            console.log(entireDB)
            // NavBar - Grabbing the title on each key for the links on the nav bar.
            Object.keys(entireDB).forEach(function(key) {
                let navEls = $(`<li class="${key}"><a href="#">${key}</a></li>`)
                navOutputEl.append(navEls)
            })
            pageShow()
            home.init(entireDB.home)
            blogs.init(entireDB.blogs)
            contactInfo.init(entireDB.contact)
            projects.init(entireDB.projects)
            jobs.init(entireDB.jobs)
        })
    })