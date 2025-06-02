/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).
*/
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4], meses[10]);


/*b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log(meses.sort());


/*c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */
meses.unshift("Inicio");
meses.push("Fin");


/*d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
meses.shift();
meses.pop();


/*e. Invertir el orden del array (utilizar reverse).*/
meses.reverse();


/*f. Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join).*/
var unidos = meses.join("-");
console.log(unidos);


/*g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice). */
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var mesesCortado = meses.slice(4,11);
console.log(mesesCortado);