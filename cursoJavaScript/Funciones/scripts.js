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
 * Funciones de primera clase
 */

function getFullName(name, lastName) {
     return `Your name is ${name} ${lastName}`
}

let fullName = getFullName('Royer', 'Masache')
console.log(fullName)

/**
 * Funciones anónimas
 * Aquellas que no tienen nombre pero reciben parámetros y se llevan a ejecución
 * Se almacenan en variables
 */

let anonima = function (a, b, c) {
    suma = a + b + c
    return suma
}

console.log(typeof anonima)
console.log(anonima(1, 2, 3))

/**
 * Funciones como constantes
 */

const constante = function (pi) {
    // El navegador imprimirá en la siguiente línea undefined porque no existe return
    return pi
}

console.log(constante(3.1416))
