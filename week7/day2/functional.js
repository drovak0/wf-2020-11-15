// Functional Programming

// Callback Functions
// const logStart = function () {
//   console.log("start")
// }
// setTimeout(logStart, 3000)

// console.log("end")
// Big Freeze
// const arr = Object.freeze([1,2,3,4]);
// arr.push(300); // we're no longer allowed to change `arr`

// Map & Filter
// const values = [1, 2, 3, 4, 5]
// const evens = values.filter((val) => val % 2 === 0)
// // console.log(evens)

// const groceries = ["pearl onions", "cremini mushrooms", "thyme"]
// const groceryList = groceries.map((item) => `<li>${item}</li>`)

// console.log(groceries)
// console.log(groceryList)

//Object Master

const pokémon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["flying", "fire"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
])

const bListPkmn = pokémon.filter(p => p.name[0] === "B" )
// console.log(bListPkmn)

const pkmnIds = pokémon.map((p) => p.id)
// console.log(pkmnIds)

const pDiv3 = pokémon.filter(p => p.id % 3 === 0 );
// console.log(pDiv3)

const firePs = pokémon.filter((p) => p.types.includes("fire"))
console.log(firePs)

console.log('Hello'.includes('h'))
// const filterByFireType = (p) => {
//   // loop through p.types
//   // return true if fire
//   return p.types.contains('fire')
// }