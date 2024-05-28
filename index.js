const last = new Date(2024, 4, 28)
const source = "https://www.iha.com.tr/samsun-haberleri/okul-muduru-heimlich-manevrasiyla-ogrencinin-hayatini-kurtardi-o-anlar-kamerada-86451179"

const lastData = document.getElementById("last")
lastData.innerText = `${last.getDate()}/${last.getMonth() + 1}/${last.getFullYear()}`
lastData.href = source

const counter = document.getElementById("counter")
let days = Math.floor((Date.now()-last)/86400000)
counter.innerText = days
