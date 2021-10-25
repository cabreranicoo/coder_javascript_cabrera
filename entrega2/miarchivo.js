let nombreUsuario = prompt("Ingrese su nombre");
let apellidoUsuario = prompt("Ingrese su apellido");
let curso = prompt("ingrese su curso");

let saludo = ("Hola " + nombreUsuario + ", tu curso es " + curso + ", a continuación ingresa tu nota");
alert(saludo);

let nota = prompt(nombreUsuario + " " + apellidoUsuario + " por favor ingresa la nota de tu examen final");

if (nota >= 8) {
    alert("Felicitaciones, aprobaste el examen y homologaste la materia");
} else if (nota >= 6) {
    alert("Muy bien, aprobaste el examen");
} else if (nota == 5)
    alert("Lo siento, tendrás que ir a recuperatorio");
else {
    alert("Deberás recursar la materia");
}