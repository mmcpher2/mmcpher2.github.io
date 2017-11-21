module.exports = { "init": function (contactInfo) {
    let contactOutputEl = $("#contact")
    console.log(contactInfo)
    contactOutputEl.append(`<div>Email: <a href="${contactInfo.content.email}">${contactInfo.content.email}</a></div>`)
    contactOutputEl.append(`<dive>Facebook: <a href="${contactInfo.content.facebook}">${contactInfo.content.facebook}</a></div>`)
    contactOutputEl.append(`<div>LinkedIn: <a href="${contactInfo.content.linkedIn}">${contactInfo.content.linkedIn}</a></div>`)
    }
}