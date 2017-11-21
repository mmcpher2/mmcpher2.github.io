module.exports = { "init": (function (projectsData) {
        let projectsOutputEl = $("#projects")
        projectsOutputEl.append($(projectsData.title))
        projectsData.content.forEach(function(project) {
            projectsOutputEl.append($(`<h2>${project.title}</h2>`))
            projectsOutputEl.append($(`<p>Link: <a href="${project.link}">${project.link}</a></p>`))
        })
    })
}