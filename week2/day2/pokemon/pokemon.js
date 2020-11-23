document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded!")

  for (var i = 1; i < 11; i++) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + i)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // how can I add an image of this pokemon?
        var body = document.querySelector("body")
        console.log(body)
        var elemImg = document.createElement("img")
        elemImg.src = data.sprites.front_default
        body.appendChild(elemImg)
      })
  }
})
