// Comentario de una línea para JavaScript

/**
 * Comentario
 * para varias líneas
 * en JavaScript
 */

/**
 * Tipos de datos
 */

/**
 * number:
 * En JavaScript todos los números pertenencen al tipo de dato number
 */

console.log(typeof 50)

/**
 * string:
 * Cadenas de texto, se escriben entre "" o ''
 * En JavaScrip todos los caracteres, conjunto de caracteres, espacios y vacíos pertenencen al tipo de dato string
 */

console.log(typeof 'JavaScript')

/**
 * boolean:
 * Pueden tener únicamente un valor, true or false
 */

console.log(typeof true)

/**
 * Tipos de dato objeto:
 * Los objetos en JavaScript son colecciones de datos o información
 * que tienen un identificador y un valor
 */

// Array
console.log(['User 1', 'User 2', 'User 3', 'User 4'])

// Objetos JavaScript

console.log(
    {
        name: 'Royer', lastName: 'Masache',
    }
)

// Null
console.log(typeof null)

// undefined
console.log(typeof undefined)

/**
 * Variables
 * Declaración y asignación de variables
 */

let student = 'Royer'
console.log(student)

// Reasignación de variables
student = 'Jeferson'
console.log(student)

/**
 * Asignación de variables por referencia
 */

let teacher = 'Daniel'
let teacherPremium = teacher
teacher = 'René'

// Reasignación de variables por referencia
teacherPremium = teacher

console.log(teacher)
console.log(teacherPremium)

/**
 * Constantes
 * En JavaScript se debe declarar y asignar una constante en un solo paso.
 * Las constantes no se pueden reasignar y se escriben generalmente en mayúsculas con formato SNAKE_CASE
 */

const COMPANY = 'APPLE'
console.log(COMPANY)
