function celsiusToFahrenheit(celsius) {
	return celsius * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
	return (fahrenheit - 32) / 1.8;
}

function celsiusToKelvin(celsius) {
	return celsius + 273.25;
}

function kelvinToCelsius(kelvin) {
	return kelvin - 273.25;
}

function fahrenheitToKelvin(fahrenheit) {
	return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}

function kelvinToFahrenheit(kelvin) {
	return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

function updateTemp(src, dest, converter) {
	let result = converter(parseFloat(src.value));
	dest.value = isNaN(result) ? "" : result;
}

let cField = document.getElementById("celsius");
let fField = document.getElementById("fahrenheit");
let kField = document.getElementById("kelvin");

cField.addEventListener("input", function(){updateTemp(cField, fField, celsiusToFahrenheit); updateTemp(cField, kField, celsiusToKelvin)});
fField.addEventListener("input", function(){updateTemp(fField, cField, fahrenheitToCelsius); updateTemp(fField, kField, fahrenheitToKelvin)});
kField.addEventListener("input", function(){updateTemp(kField, cField, kelvinToCelsius); updateTemp(kField, fField, kelvinToFahrenheit)});