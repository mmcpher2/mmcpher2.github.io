module.exports = { "init": function (contactInfo) {
    let contactOutputEl = $("#contact")
    contactOutputEl.append(`<div>Email: <a href="${contactInfo.content.email}">${contactInfo.content.email}</a></div>`)
    contactOutputEl.append(`<div>Facebook: <a href="${contactInfo.content.facebook}">${contactInfo.content.facebook}</a></div>`)
    contactOutputEl.append(`<div>LinkedIn: <a href="${contactInfo.content.linkedIn}">${contactInfo.content.linkedIn}</a></div>`)
    }
}