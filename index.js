const last = new Date(2024, 4, 23)
const source = "https://www.odatv.com/guncel/trabzonda-bogazina-yemek-kacan-kadini-belediye-calisani-heimlich-manevrasiyla-kurtardi-120045125"

const lastData = document.getElementById("last")
lastData.innerText = `${last.getDate()}/${last.getMonth() + 1}/${last.getFullYear()}`
lastData.href = source

const counter = document.getElementById("counter")
let days = Math.floor((Date.now()-last)/86400000)
counter.innerText = days
