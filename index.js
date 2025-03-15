let inputEl = document.getElementById("inputfield")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204
const gallonToLiter = 3.785


 

convertBtn.addEventListener("click", function(){

    let unit = inputEl.value
    let totalFeet = unit * meterToFeet
    let totalGallons = unit * literToGallon
    let totalPounds = unit * kiloToPound
    let totalmeter = unit / meterToFeet
    let totalLiter= unit * gallonToLiter
    let totalKilo = unit / kiloToPound
    

    
    let ft = totalFeet.toFixed(3)
    let gl = totalGallons.toFixed (3)
    let lb = totalPounds.toFixed(3)
    let mtr = totalmeter.toFixed(3)
    let ltr = totalLiter.toFixed(3)
    let kg = totalKilo.toFixed(3)
    
    lengthEl.textContent = `${unit} meters = ${ft} feet | ${unit} feet = ${mtr} meters`
    volumeEl.textContent = `${unit} liters = ${gl} gallons | ${unit} gallons = ${ltr} liters`
    massEl.textContent = `${unit} kilograms = ${lb} pounds | ${unit} pounds = ${kg} kilos`
       
})