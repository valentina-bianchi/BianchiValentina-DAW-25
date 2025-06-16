// Obtener referencias a campos
const form = document.getElementById("suscripcion-formulario"); //Obtengo el formulario
const campos = { //creo objeto campo
    nombre: document.getElementById("nombre-completo"), //recupero cada uno de los campos del formulario con el id del input
    email: document.getElementById("email"),
    contraseña: document.getElementById("contraseña"),
    repContraseña: document.getElementById("repcontraseña"),
    edad: document.getElementById("edad"),
    telefono: document.getElementById("telefono"),
    direccion: document.getElementById("direccion"),
    ciudad: document.getElementById("ciudad"),
    cp: document.getElementById("cp"),
    dni: document.getElementById("dni")
};

// Obtener errores
const errores = { //creo objeto errores
    nombre: document.getElementById("error-nombre"), //recupero cada uno de los errores con el id de la etiqueta small de cada campo
    email: document.getElementById("error-email"),
    contraseña: document.getElementById("error-contraseña"),
    repContraseña: document.getElementById("error-repcontraseña"),
    edad: document.getElementById("error-edad"),
    telefono: document.getElementById("error-telefono"),
    direccion: document.getElementById("error-direccion"),
    ciudad: document.getElementById("error-ciudad"),
    cp: document.getElementById("error-cp"),
    dni: document.getElementById("error-dni")
};

// Validaciones
//Nombre completo: Debe tener más de 6 letras y al menos un espacio entre medio.
function validarNombre() {
    const valor = campos.nombre.value.trim(); // Saca los espacios de los extremos con el .trim
    if (valor.length <= 6 || !valor.includes(" ")) {
        errores.nombre.textContent = "Debe tener más de 6 letras y al menos un espacio.";
        return false;
    }
    return true;
}

//Email: debe tener un formato de email válido.
function validarEmail() {
    const valor = campos.email.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresion regular 
    // ^: significa inicio de la cadena
    // [^\s@]+: Uno o más caracteres que no son espacio (\s) ni @. Ejemplo: valentina
    // @: @ obligatorio. Ejemplo: valentina@
    // [^\s@]+:  Esto representa el dominio (parte después del @). Ejemplo: valentina@gmail
    // \.: el punto. Ejemplo: valentina@gmail.
    // [^\s@]+:  para el TDL. Ejemplo: valentina@gmail.com
    // $: fin de la cadena
    if (!regex.test(valor)) {
        errores.email.textContent = "Ingrese un email válido.";
        return false;
    }
    return true;
}
//Contraseña: Al menos 8 caracteres, formados por letras y números.

function validarContraseña() {
    const valor = campos.contraseña.value;
    const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!regex.test(valor)) {
        errores.contraseña.textContent = "Debe tener al menos 8 caracteres, letras y números.";
        return false;
    }
    return true;
}
// SIn regex:
// function validarContraseña() {
//     const valor = campos.contraseña.value;
//     // Longitud +8 caracteres
//     if (valor.length < 8) {
//         errores.contraseña.textContent = "Debe tener al menos 8 caracteres.";
//         return false;
//     }

//     // Verificar que haya al menos una letra
//     var tieneLetra = false;
//     // Verificar que haya al menos un número
//     var tieneNumero = false;
//     for (var i = 0; i < valor.length; i++) {
//         const char = valor[i];
//         if (isNaN(char)) {
//             // No es un número,  puede ser una letra u otro símbolo
//             if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//                 tieneLetra = true;
//             }
//         } else {
//             // Es un número
//             tieneNumero = true;
//         }
//     }
//     if (!tieneLetra || !tieneNumero) {
//         errores.contraseña.textContent = "Debe tener letras y números.";
//         return false;
//     }
//     return true;
// }

//validar que contraseña y repetir contraseña sean iguales
function validarRepetirContraseña() {
    if (campos.repContraseña.value !== campos.contraseña.value) {
        errores.repContraseña.textContent = "Las contraseñas no coinciden.";
        return false;
    }
    return true;
}

//Edad: Número entero mayor o igual a 18.Edad: Número entero mayor o igual a 18.
function validarEdad() {
    const edad = parseInt(campos.edad.value); //convierte texto a entero. si escribe por ejemplo 25 se convierte a 25, si escribiera "abc" devuelve NaN
    if (isNaN(edad) || edad < 18) { //isNaN(edad) Devuelve true si edad no es un número válido, osea edad= NaN
        errores.edad.textContent = "Debe ser mayor o igual a 18 años.";
        return false;
    }
    return true;
}

//Teléfono: Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.
function validarTelefono() {
    const valor = campos.telefono.value.trim();
    const regex = /^\d{7,}$/; //\d{7,}  al menos 7 dígitos numéricos
    //Nada de guiones, paréntesis o espacios, se rechaza implícitamente porque no son dígitos
    if (!regex.test(valor)) {
        errores.telefono.textContent = "Solo números, al menos 7 dígitos.";
        return false;
    }
    return true;
}

//Dirección: Al menos 5 caracteres, con letras, números y un espacio en el medio.
function validarDireccion() {
    const valor = campos.direccion.value.trim();
    const tieneEspacio = valor.includes(" ");
    const tieneLetra = /[a-zA-Z]/.test(valor);
    const tieneNumero = /\d/.test(valor);

    if (valor.length < 5 || !tieneEspacio || !tieneLetra || !tieneNumero) {
        errores.direccion.textContent = "Debe tener al menos 5 caracteres, letras, números y un espacio.";
        return false;
    }

    return true;
}

//Ciudad: Al menos 3 caracteres.
function validarCiudad() {
    const valor = campos.ciudad.value.trim();
    if (valor.length < 3) {
        errores.ciudad.textContent = "Debe tener al menos 3 caracteres.";
        return false;
    }
    return true;
}
//Código Postal: Al menos 3 caracteres.
function validarCP() {
    const valor = campos.cp.value.trim();
    if (valor.length < 3) {
        errores.cp.textContent = "Debe tener al menos 3 caracteres.";
        return false;
    }
    return true;
}
//DNI: Número de 7 u 8 dígitos.
function validarDNI() {
    const valor = campos.dni.value.trim();
    const regex = /^\d{7,8}$/; //\d{7,8} : exactamente 7 u 8 dígitos numéricos
    if (!regex.test(valor)) {
        errores.dni.textContent = "Debe ser un número de 7 u 8 dígitos.";
        return false;
    }
    return true;
}

// Asocia eventos blur y focus
Object.keys(campos).forEach(campo => {
    campos[campo].addEventListener("blur", () => {
        const valido = window["validar" + capitalizar(campo)]();
    }); // cuando el usuario sale del campo (deja de escribir), se llama a la función de validación correspondiente.

    campos[campo].addEventListener("focus", () => {
        errores[campo].textContent = "";
    }); //cuando el usuario entra al campo, se borra el mensaje de error.
});

// Capitaliza la primera letra
function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Mostrar datos o errores al enviar
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Limpiar errores previos
    Object.values(errores).forEach(e => e.textContent = "");

    const validaciones = [
        validarNombre(),
        validarEmail(),
        validarContraseña(),
        validarRepetirContraseña(),
        validarEdad(),
        validarTelefono(),
        validarDireccion(),
        validarCiudad(),
        validarCP(),
        validarDNI()
    ]; //Cada funcion devuelve true o falso, array con resultados
    if (validaciones.every(Boolean)) {
        alert(`
            Formulario enviado con éxito:
            Nombre: ${campos.nombre.value}
            Email: ${campos.email.value}
            Edad: ${campos.edad.value}
            Teléfono: ${campos.telefono.value}
            Dirección: ${campos.direccion.value}
            Ciudad: ${campos.ciudad.value}
            Código Postal: ${campos.cp.value}
            DNI: ${campos.dni.value}
        `);
        //form.reset();
        //actualizarTitulo("HOLA");
    } else {
        alert("Hay errores en el formulario. Por favor revisá los campos marcados.");
        return;
    }
    // Recolectar datos
    const datos = {
        nombre: campos.nombre.value.trim(),
        email: campos.email.value.trim(),
        contraseña: campos.contraseña.value,
        edad: campos.edad.value,
        telefono: campos.telefono.value.trim(),
        direccion: campos.direccion.value.trim(),
        ciudad: campos.ciudad.value.trim(),
        cp: campos.cp.value.trim(),
        dni: campos.dni.value.trim()
    };
    //consumo api, simulando llamada con GET
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        mostrarModal(true, data);
        localStorage.setItem("datosSuscripcion", JSON.stringify(datos));
    })
    .catch(error => {
        mostrarModal(false, error.message);
    });
    form.reset();   
    // Versión con GET: la API NO funciona correctamente así, pero lo muestro por consigna
    /*
    const queryParams = new URLSearchParams({
        nombre: datos.nombre,
        email: datos.email,
        contraseña: datos.contraseña,
        edad: datos.edad,
        telefono: datos.telefono,
        direccion: datos.direccion,
        ciudad: datos.ciudad,
        cp: datos.cp,
        dni: datos.dni
    });

    const url = `https://jsonplaceholder.typicode.com/posts?${queryParams.toString()}`;

    fetch(url) //es get por defecto
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            mostrarModal(true, data);
            localStorage.setItem("datosSuscripcion", JSON.stringify(datos));
        })
        .catch(error => {
            mostrarModal(false, error.message);
        });
    */

});

// BONUS: Título en tiempo real
const tituloFormulario = document.getElementById("titulo-formulario");

campos.nombre.addEventListener("keydown", () => {
    actualizarTitulo(`HOLA ${campos.nombre.value}`);
});

campos.nombre.addEventListener("focus", () => {
    actualizarTitulo(`HOLA ${campos.nombre.value}`);
});

function actualizarTitulo(texto) {
    tituloFormulario.textContent = texto || "HOLA";
}
// Clase 10:
// Mostrar modal
function mostrarModal(exito, contenido) {
    const modal = document.getElementById("modal");
    const mensaje = document.getElementById("modal-mensaje");
    const titulo = document.getElementById("modal-titulo");

    if (exito) {
        titulo.textContent = "✅ Suscripción exitosa:";
        mensaje.innerHTML = `<pre>${JSON.stringify(contenido, null, 2)}</pre>`;
    } else {
        titulo.textContent = "❌ Error en la suscripción:";
        mensaje.innerHTML = `<strong>${contenido}</strong>`;
    }
    modal.classList.remove("oculto");
}

document.getElementById("modal-cerrar").addEventListener("click", () => {
    document.getElementById("modal").classList.add("oculto");
});

window.onload = () => {  //window.onload = () => { ... } se ejecuta automáticamente cuando la página termina de cargarse. 
    const datosGuardados = localStorage.getItem("datosSuscripcion"); //recupero del local storage
    if (datosGuardados) {  //si encuentra algo
        const datos = JSON.parse(datosGuardados); //convierte de texto JSON a objeto JavaScript
        campos.nombre.value = datos.nombre;
        campos.email.value = datos.email;   //rellena los campos del formulario con los valores guardados
        campos.contraseña.value = datos.contraseña;
        campos.repContraseña.value = datos.contraseña;
        campos.edad.value = datos.edad;
        campos.telefono.value = datos.telefono;
        campos.direccion.value = datos.direccion;
        campos.ciudad.value = datos.ciudad;
        campos.cp.value = datos.cp;
        campos.dni.value = datos.dni;
    }
};