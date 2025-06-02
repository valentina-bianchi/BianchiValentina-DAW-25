/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).*/
var texto = "Hola mundo JavaScript";
var textoMayuscula = texto.toUpperCase();


/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring). */
var texto2 = "Lorem Ipsum is Simply";
var primeros5 = texto2.substring(0,5); //subtring(inicio,fin)   devuelve : lorem
//subtring(2) Si solo ponés un número, copia desde ese índice hasta el final. osea: rem Ipsum is simply



/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring). */
var ultimos3 = texto2.substring(texto2.length - 3); 


/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).*/
var capitalizada = texto2.substring(0,1).toUpperCase() + texto2.substring(1).toLowerCase();


/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf). */
var posicionEnBlanco = texto2.indexOf(" "); //devuelve la posicion de lo que busca entre parentesis q es un espacio


/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +). */
var texto3 = "brillante esperanza";
var espacio = texto3.indexOf(" ");
var resultadoTexto3 = texto3.substring(0,1).toUpperCase() + texto3.substring(1, espacio +1).toLowerCase() + texto3.substring(espacio + 1, espacio+2).toUpperCase() + texto3.substring(espacio+2).toLowerCase();


