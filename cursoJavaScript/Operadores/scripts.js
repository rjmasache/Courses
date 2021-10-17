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

/**
 * Operadores lógicos:
 * Permiten concatenar 2 validaciones
 * and (&&) y or (||)
 */

let valor1 = 1
let valor2 = 2
let valor3 = 3
console.log(`¿valor1 es el menor de todos los valores? ${(valor1 < valor2) && (valor1 < valor3)}`)

/**
 * Operadores unarios y ternarios
 */

let unario = 10
unario++
console.log(unario);

let ternario1 = 5
let ternario2 = 10
let ternario3 = ternario1 < ternario2 ? 'Es verdad' : 'No es verdad'
console.log(ternario3)

/**
 * Type coercion:
 * Capacidad del lenguaje de programación JavaScript para convertir cualquier dato en otro tipo de dato
 * NaN = Not a Number
 */

let coercion1 = 2
let coercion2 = '2'
console.log(coercion1 + coercion2)

let coercion3 = true
let coercion4 = false
console.log(coercion3 + coercion4)
