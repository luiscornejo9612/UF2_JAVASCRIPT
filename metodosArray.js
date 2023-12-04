function metodosArray() {
    let contenedorid = document.getElementById("colorMayorMenor");
    let miArray = ["verd", "vermell", "groc", "blau", "negre", "blanc"];
    let contador = 0;

    for (let i = 0; i < miArray.length; i++) {
        // Comparar con "marro" en lugar de < "marro"
        if (miArray[i] < "marro") {
            contador++;
            contenedorid.innerHTML += `<p>El color ${miArray[i]} es menor a marro </p>`;
            
        }
    }

    if (contador === miArray.length) {
        // Utilizar el contenedor directamente, sin crear un nuevo párrafo
        contenedorid.innerHTML = "<p>" + "Todos los colores son menores a marro" + "</p>";
    } else {
        // Utilizar el contenedor directamente, sin crear un nuevo párrafo
        contenedorid.innerHTML += "<p>" + "No todos los colores son menores a marro" + "</p>";
    }

    // Obtener los últimos 2 elementos del array
    let ultimosDosColores = miArray.slice(-2);

    contenedorid.innerHTML += `Los últimos 2 colores son: ${ultimosDosColores.join(', ')}`;

    // Agregar el color turquesa
    miArray.push("turquesa");
    contenedorid.innerHTML += `<p>Se ha agregado el color turquesa. Nuevo array: [${miArray.join(', ')}]</p>`;
    
    let indiceColor = miArray.indexOf("verd");
    miArray.splice(indiceColor, 1);
    contenedorid.innerHTML += `<p>Se ha eliminado el color verd. Nuevo array: [${miArray.join(', ')}]</p>`;
}

