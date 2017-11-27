

// Hide/shows related page content up clicking nav links
const pageShow = function () {$("a").on("click", function (e) {

    const currentNavClicked = e.target.parentNode.className
    if (currentNavClicked) {
            // adds class-hidden to any section not clicked on the main page
            $(".mainPage").addClass("hidden")
            console.log("passed add hidden")
            $(`#${currentNavClicked}`).removeClass("hidden")
        }
    })
}
module.exports = pageShow
