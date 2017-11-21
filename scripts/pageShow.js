


const pageShow = function () {$("a").on("click", function (e) {

    // Target section tags with mainPage class
    // Add class of hidden to all section tags with mainPage class
    // const sections = section.id
    // console.log(sections)
    // .addClass("hidden")
    const currentNavClicked = e.target.parentNode.className
    if (currentNavClicked) {
            $(".mainPage").addClass("hidden")
            console.log("passed add hidden")
            $(`#${currentNavClicked}`).removeClass("hidden")
        }
    })
}
module.exports = pageShow
