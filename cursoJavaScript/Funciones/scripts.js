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
    return a + b + c
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

/**
 * Scope
 * Alcance global y alcance de función
 */

let scope = 'Función Scope'
scope = 'Scope'

const alcance = function () {
    let scope = 'Alcance'
    console.log(`${scope}`)
}

alcance()
console.log(scope)

/**
 * Funciones flecha / Arrow Functions
 * =>
 */

const sumar = (a, b) => a + b

const restar = (c, d) => c - d

console.log(sumar(5, 5))
console.log(restar(6, 3))

const arrowFunction = (nombre) => `Hi ${nombre}`
console.log(arrowFunction('Royer'))

// Función flecha con lógica
const arrow = (nombre) => {
    if (typeof name === "string") {
        return `Buenas noches ${nombre}`
    } else {
        console.error('El tipo de dato ingresado no es el correcto')
    }
}

console.log(arrow('Royer'))
