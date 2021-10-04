/**
 * Funciones
 */

// Declaración de la función
function saludar() {
    console.log('Hi')
}

// Invocación de la función
saludar()

/**
 * Función que recibe parámetros
 */

function greet(nombre) {
    if (typeof nombre === "string") {
        console.log(`Hi ${nombre}`)
    } else {
        console.log('El tipo de dato ingresado no es el correcto')
    }
}

greet('Royer')

/**
 * Función con valor de retorno
 */

function getFullName(name, lastName) {
     return `Your name is ${name} ${lastName}`
}

let fullName = getFullName('Royer', 'Masache')
console.log(fullName)
