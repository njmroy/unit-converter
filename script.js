const conversion_rates = {
    metersToFeetRatio: 3.28084,
    feetToMetersRatio: 0.3048,
    litersToGallonsRatio: 0.264172,
    gallonsToLitersRatio: 3.78541,
    KgToLbsRatio: 2.20462,
    LbsToKgRatio: 0.453592
}
//Get input value from HTML element
let input = document.getElementById("input-element");

input.addEventListener('change', (event) => {
    console.log("In Event Listener!")
    let input = event.target.value;
    length(input);
    volume(input);
    mass(input);
})



console.log(Number(document.getElementById("input-element").value));

//Length
function metersToFeet(value) {
    return conversion= value*conversion_rates.metersToFeetRatio;

}

function feetToMeters(value) {
    return value*conversion_rates.feetToMetersRatio;
}

function litersToGallons(value){
    return value*conversion_rates.litersToGallonsRatio;
}

function gallonsToLiters(value) {
    return value*conversion_rates.gallonsToLitersRatio;
}

function KgToLbs(value) {
    return value*conversion_rates.KgToLbsRatio;
}

function LbsToKg(value) {
    return value*conversion_rates.LbsToKgRatio;
}

function length(value) {
    conversionString = document.getElementById("length-conversion").innerText;
    console.log(conversion_rates);
    console.log(conversionString);

    val1 = metersToFeet(value).toFixed(3);
    val2 = feetToMeters(value).toFixed(3);
    conversionString = value+" meters = " + val1+" feet | " + value + " feet = " + val2 +" meters";
    document.getElementById("length-conversion").innerText = conversionString;

}

function volume(value) {
    conversionString = document.getElementById("volume-conversion").innerText; 
    
    val1 = litersToGallons(value).toFixed(3);
    val2 = gallonsToLiters(value).toFixed(3);
    conversionString = value+" liters = " + val1+" gallons | " + value + " gallons = " + val2 +" feet";
    document.getElementById("volume-conversion").innerText = conversionString;
}

function mass(value) {
    conversionString = document.getElementById("mass-conversion").innerText; 
    
    val1 = KgToLbs(value).toFixed(3);
    val2 = LbsToKg(value).toFixed(3);
    conversionString = value+" kilograms = " + val1+" pounds | " + value + " pounds = " + val2 +" kilograms";
    document.getElementById("mass-conversion").innerText = conversionString;
}

length(value);
volume(value);
mass(value);


