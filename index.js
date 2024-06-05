const last = new Date(2024, 5, 4)
const source = "https://www.trthaber.com/videolar/samsunda-bogazina-yemek-kacan-kiz-heimlich-manevrasiyla-kurtarildi-72863.html"

const lastData = document.getElementById("last")
lastData.innerText = `${last.getDate()}/${last.getMonth() + 1}/${last.getFullYear()}`
lastData.href = source

const counter = document.getElementById("counter")
let days = Math.floor((Date.now()-last)/86400000)
counter.innerText = days
