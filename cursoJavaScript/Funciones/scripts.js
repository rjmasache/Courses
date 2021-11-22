/**
 * Funciones
 */

// Declaración de función
function hello() {
    console.log('Hello world!')
}


// Invocación de función
hello()

/**
 * Función que recibe parámetros
 */

function greet(nombre) {
    console.log(`Buenos días ${nombre}`)
}

greet('Royer')

/**
 * Función con valor de retorno
 * Funciones de primera clase
 */

function getFullName(name, lastName) {
    return `Tu nombre es ${name} ${lastName}`
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

console.log(anonima(1, 2, 3))

let resultado = anonima(5, 5, 5)
console.log(resultado)

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

let scope = 'Variable externa'

const alcance = function () {
    let scope = 'Variable interna'
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

const arrowFunction = nombre => `Función flecha de ${nombre}`
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
