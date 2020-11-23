// console.log("javascript is loading!")
// console.log(console)
// console.dir(document)

// Vanilla Javascript
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM is fully loaded")
//   var title = document.getElementById("title")
//   console.log(title)
//   title.style.backgroundColor = "purple"

//   var btn = document.getElementById("btn")
//   btn.addEventListener("click", function () {
//     // alert("you clicked the button!")
//     // title.style.backgroundColor = "pink"
//     // how can I toggle the display?
//     if (title.style.display == "none") {
//       // set display block
//       title.style.display = "block"
//     } else {
//       title.style.display = "none"
//     }
//     // set display hidden
//   })
// })

// id vs classes

// JQuery
$(document).ready(function () {
  var $title = $("#title")
  console.log($title)
  $title.css("background-color", "green")

  $(btn).click(function (event) {
    console.log(event)

    if ($title.css("display") == "none") {
      $title.css("display", "block")
    } else {
      $title.css("display", "none")
    }
  })
})
