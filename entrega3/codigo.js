let votT = "Tissot";
let votS = "Swatch";


let eleccion = prompt("vamos a elegir entre estas dos marcas, ¿cual es la mejor para ustedes?, ¿Tissot (usamos la letra T) o Swatch (usamos la letra S)?");


while (eleccion != "esc") {

    console.log(`tu votacion fue ingresada: ${eleccion}`);

    eleccion = prompt("vamos a elegir entre estas dos marcas, ¿cual es la mejor para ustedes?, ¿Tissot (usamos la letra T) o Swatch (usamos la letra S)?");

    if (eleccion == "T" || eleccion == "t") {
        votT = votT + 1;
    } else if (eleccion == "S" || eleccion == "s") {
        votS = votS + 1;
    } else {
        console.log("voto anulado");
    }



    eleccion = prompt("vamos a elegir entre estas dos marcas, ¿cual es la mejor para ustedes?, ¿Tissot (usamos la letra T) o Swatch (usamos la letra S)?");

}