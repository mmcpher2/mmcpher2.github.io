module.exports = { "init": (function (resumeData) {
        let jobsOutputEl = $("#jobs")
        jobsOutputEl.append($(`<h1>${resumeData.title}</h1>)`))
        resumeData.content.forEach(function(job) {
            jobsOutputEl.append($(`<h3>${job.title}</h3>`))
            jobsOutputEl.append($(`<h4>${job.company}</h4>`))
            jobsOutputEl.append($(`<h5>${job.datesemployed}</h5>`))
            jobsOutputEl.append($(`<p>${job.description}</p>`))
        })
    })
}