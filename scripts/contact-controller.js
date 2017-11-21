module.exports = { "init": function (contactInfo) {
    let contactOutputEl = $("#contact")
    let email = $(`<h2>Email: ${contactInfo.content.email}</h2>`)
    contactOutputEl.append(email)}
}