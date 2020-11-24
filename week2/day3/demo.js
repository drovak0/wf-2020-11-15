console.log("it works!")

$(document).ready(function () {
  // document.getElementById()
  $("#contact-form").submit(function (event) {
    // alert("form submitted!")
    event.preventDefault()

    // grab information from form
    var $fullName = $("#full-name").val()
    var $email = $("#email").val()
    console.log($fullName, $email)
    // add it to table
    // what is the output we are adding?
    var tableRow = `<tr>
        <td>${$fullName}</td>
        <td>${$email}</td>
      </tr>`

    $("#contact-table tbody").append(tableRow)

    $("#full-name").val("")
    $("#email").val("")
  })

  function addRow(event) {
    console.log("clicked the row!", this)
  }

  $("#contact-table").on("click", "tr", addRow)
})
