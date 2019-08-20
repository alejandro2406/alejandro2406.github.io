"use strict";

function letra_dni(dni) {
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    return letras[dni % 23];
}

function update_letter(e) {
    var text = e.target.value;
    var re = /^([0-9]+)([a-z]?)$/i;
    var match = text.match(re);
    var message;
    var letra;
    if (match && match[1]) {
        var dni = parseInt(match[0], 10);
        letra = letra_dni(dni);
        if (match[2]) {
            message = letra === match[2].toUpperCase()
                ? "Letra correcta"
                : "Letra incorrecta";
        } else {
            message = "";
        }
    } else {
        letra = "";
        message = "Inserte un DNI";
    }
    document.getElementById("letra").innerHTML = letra;
    document.getElementById("message").innerHTML = message;
}

var dni_input = document.getElementById("dni");
try {
    dni_input.addEventListener("oninput" in dni_input ? "input" : "keyup", update_letter);
} catch(e) {
    alert(e)
}