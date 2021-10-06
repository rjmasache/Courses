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

/**
 * Filter
 * Filtra contenido de un arreglo
 */

let pares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11]

let paresFiltrados = pares.filter(numero => numero % 2 === 0)
console.log(paresFiltrados)

/**
 * Find: Encontrar un valor
 * Includes: Evalúa que el valor sea exactamente igual al que se busca
 * Some: Comprueba si al menos algún elemento cumple con una condición
 * Every: Valida si todos los elementos cumplen con una condición
 */

let find = pares.find(numero => numero % 2 !== 0)
console.log(find)

let includes = pares.includes(6)
console.log(includes)

let some = pares.some(numero => numero < 0)
console.log(some)

let every = pares.every(numero => numero === 0)
console.log(every)
