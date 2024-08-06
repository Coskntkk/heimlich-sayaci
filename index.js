const last = new Date(2024, 7, 6)
const source = "https://www.sokgazetesi.com.tr/heimlich-manevrasi-bir-hayat-daha-kurtardi-usta-ciragini-hayatta-tuttu"

const lastData = document.getElementById("last")
lastData.innerText = `${last.getDate()}/${last.getMonth() + 1}/${last.getFullYear()}`
lastData.href = source

const counter = document.getElementById("counter")
let days = Math.floor((Date.now()-last)/86400000)
counter.innerText = days
