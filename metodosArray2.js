function metodosArray2() {
    let miArray = ["verd", "vermell", "groc", "blau", "negre", "blanc"];
    let miArray2 = ["dorado", "lila", "celeste", "aqua"];

    document.write(miArray + " -> at(0) -> " + miArray.at(0) + "<br>")
    document.write(miArray + " -> concat(miArray2) -> " + miArray.concat(miArray2) + "<br>")
    document.write(miArray + " -> copyWithin(2, 1, 4) -> " + miArray.copyWithin(2, 1, 4) + "<br>")
    document.write(miArray + " -> entries() -> ");
    for (let [i, valor] of miArray.entries()) {
        document.write(`[${i}, '${valor}'] `);
    }
    document.write("<br>");

    document.write(miArray + " -> every() -> " + miArray.every(elemento => elemento.length > 3) + "<br>");
    document.write(miArray + " -> fill('gris', 3 ,5) -> " + miArray.fill('gris', 3, 5) + "<br>");
    document.write(miArray + " -> filter(elemento => elemento.includes ('e')) -> " + miArray.filter(elemento => elemento.includes('e')) + "<br>");
    document.write(miArray + " -> find(elemento => elemento.includes('e')) -> " + miArray.find(elemento => elemento.includes('e')) + "<br>");
    document.write(miArray + " -> findIndex(elemento => elemento.includes('e')) -> " + miArray.findIndex(elemento => elemento.includes('e')) + "<br>");
    let miArrayAplanado = ["verd", "vermell", ["coche", "moto"], "negre", "blanc"];
    document.write("[verd ", "vermell ", "[coche  ", "moto]", "  negre", "  blanc]" + " -> flat() -> " + miArrayAplanado.flat() + "<br>");
    document.write(miArray + " -> flatMap(elemento => elemento.split('')) -> " + miArray.flatMap(elemento => elemento.split('')) + "<br>");
    document.write("<p>" + miArray + " -> forEach()  <br>");
    miArray.forEach(function (elemento) {document.write("-> "+ elemento + "<br>");});
    document.write("<br>");
    document.write(miArray + " ->Array.from('miArray2') -> " + Array.from(miArray2) + "<br>");
    document.write(miArray + " -> includes('blau') -> " + miArray.includes('blau') + "<br>");
    document.write(miArray + " -> indexOf('blau') -> " + miArray.indexOf('blau') + "<br>");
    document.write("Array.isArray(miArray) -> " + Array.isArray(miArray) + "<br>");
    document.write(miArray + " -> join('-') -> " + miArray.join('-') + "<br>");
    document.write(miArray + " -> keys() -> ");
    for (let indice of miArray.keys()) {
        document.write(`${indice} `);
    }
    document.write("<br>");
    document.write(miArray + " -> lastIndexOf('blau') -> " + miArray.lastIndexOf('blau') + "<br>");
    document.write(miArray + " -> length -> " + miArray.length + "<br>");
    document.write(miArray + " -> map() -> " + miArray.map(elemento => elemento.toUpperCase()) + "<br>");
    document.write(miArray + " -> pop() -> " + miArray.pop() + "<br>");
    document.write(miArray + " -> push('rosa') -> " + miArray.push('rosa') + " " + miArray + "<br>");
    document.write(miArray + " -> reduce(acumulador, elemento) => acumulador + elemento) -> " + miArray.reduce((acumulador, elemento) => acumulador + elemento) + "<br>");
    document.write(miArray + " -> reduceRight() -> " + miArray.reduceRight((acumulador, elemento) => acumulador + elemento) + "<br>");
    document.write(miArray + " -> reverse() -> " + miArray.reverse() + "<br>");
    document.write(miArray + " -> shift() -> " + miArray.shift() + "<br>");
    document.write(miArray + " -> slice(1, 3) -> " + miArray.slice(1, 3) + "<br>");
    document.write(miArray + " -> some('a') -> " + miArray.some(elemento => elemento.includes('a')) + "<br>");
    document.write(miArray + " -> sort() -> " + miArray.sort() + "<br>");
    document.write(miArray + " -> splice(1, 2, 'morado', 'naranja') -> " + miArray.splice(1, 2, 'morado', 'naranja') + "<br>");
    document.write(miArray + " -> toString() -> " + miArray.toString() + "<br>");
    document.write(miArray + " -> unshift('azul', 'verde') -> " + miArray.unshift('azul', 'verde') + "<br>");
    document.write(miArray + " -> valueOf() -> " + miArray.valueOf() + "<br>");

}