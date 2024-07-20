const last = new Date(2024, 6, 20)
const source = "https://www.yenialanya.com/haber/20985656/soluk-borusuna-yemek-kacan-musteriyi-heimlich-manevrasi-ile-kurtardi#:~:text=Tokat'%C4%B1n%20Turhal%20il%C3%A7esinde%20bir%20restoranda%20meydana%20gelen%20olayda%2C%20m%C3%BC%C5%9Fterinin,manevras%C4%B1%20yaparak%20m%C3%BC%C5%9Fterinin%20hayat%C4%B1n%C4%B1%20kurtard%C4%B1."

const lastData = document.getElementById("last")
lastData.innerText = `${last.getDate()}/${last.getMonth() + 1}/${last.getFullYear()}`
lastData.href = source

const counter = document.getElementById("counter")
let days = Math.floor((Date.now()-last)/86400000)
counter.innerText = days
