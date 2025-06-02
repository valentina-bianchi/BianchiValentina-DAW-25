/*a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el
valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than
0,5” y sino un alerta con el mensaje “Lower than 0,5”.
*/
var numeroRandom = Math.random();
if(numeroRandom >= 0,5){
    alert("Greater than 0,5");
}else{
    alert("Lower than 0,5");
}


/*b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y
muestre los siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años.
*/
var age = 21;
if (age < 2) {
    alert("Bebe");
} else if (age < 13) {
    alert("Niño");
} else if (age < 20) {
    alert("Adolescente");
} else if (age < 31) {
    alert("Joven");
} else if (age < 61) {
    alert("Adulto");
} else if (age < 76) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}
// con switch:
 age = 70;

switch (true) {
  case (age < 2):
    alert("Bebe");
    break;
  case (age < 13):
    alert("Niño");
    break;
  case (age < 20):
    alert("Adolescente");
    break;
  case (age < 31):
    alert("Joven");
    break;
  case (age < 61):
    alert("Adulto");
    break;
  case (age < 76):
    alert("Adulto mayor");
    break;
      case (age < 100):
    alert("Anciano");
    break;
  default:
    alert("Edad fuera de rango");
    break;
}
