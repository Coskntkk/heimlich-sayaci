const last = new Date(2024, 8, 23)
const source = "https://www.haberturk.com/amasya-haberleri/35715519-amasyada-ogretmen-ogrencisinin-hayatini-heimlich-manevrasiyla-kurtardi"

const lastData = document.getElementById("last")
lastData.innerText = `${last.getDate()}/${last.getMonth() + 1}/${last.getFullYear()}`
lastData.href = source

const counter = document.getElementById("counter")
let days = Math.floor((Date.now()-last)/86400000)
counter.innerText = days
