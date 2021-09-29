/**
 * Operadores aritméticos:
 * Permiten realizar operaciones matemáticas
 * Suma, resta, multiplicación, división y residuo
 */

let suma = 2 + 2
console.log(suma)

let resta = 10 - 5
console.log(resta)

let multiplicacion = 5 * 5
console.log(multiplicacion)

let division = 20 / 4
console.log(division)

let residuo = 10 % 5
console.log(residuo)

/**
 * Operadores de asignación:
 * Permiten asignar un valor
 */

let operador = 5
let operadorAsignacion = 10
operador += operadorAsignacion
console.log(operador)

// Operador de concatenación
let nombre = 'Royer'
let apellido = 'Masache'
let nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

// Template string
let nickname = `Mi nombre es ${nombre} y mi  apellido es ${apellido}`
console.log(nickname)

/**
 * Operadores de comparación:
 * Permiten comparar datos
 * Para datos string y numéricos: Igual y estrictamente igual, diferente y estrictamente diferente
 */

let a = 10
let b = 20
console.log(a === b)
console.log(a !== b)

/**
 * Solo para datos numéricos:
 * Mayor que, menor que,
 * mayor o igual que, menor o igual que
 */

let c = 5
let d = 10
console.log(c >= d)
console.log(c <= d)
