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
 * Métodos que no modifican
 * un arreglo
 */

// Divide el arreglo en 2 partes

let arregloDividido = arreglo.slice(0, 2)
console.log(arregloDividido)

/**
 * For each
 * para recorrer arrays sin modificarlo
 */

arreglo.forEach(usuario => console.log(`Hola ${usuario}`))

/**
 * Map
 * Ejecuta la misma funcionalidad de For each pero regresa un nuevo arreglo con los valores retornados
 */

let map = arreglo.map(usuario => `Hola ${usuario}`)
console.log(map)

