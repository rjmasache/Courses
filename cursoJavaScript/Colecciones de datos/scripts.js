/**
 * Arrays
 * Métodos que modifican un arreglo
 */

let arreglo = ['Usuario 1', 'Usuario 2', 'Usuario 3']
console.log(arreglo)

// Agregar elementos a un arreglo
arreglo.push('Usuario 4')
console.log(arreglo)

// Eliminar elementos de un arreglo
arreglo.pop()
console.log(arreglo)

/**
 * Métodos no que modifican un arreglo
 */

// Divide el arreglo en 2 partes

let arregloDividido = arreglo.slice(0, 2)
console.log(arregloDividido)
