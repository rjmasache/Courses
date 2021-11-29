/**
 * REQUERIMIENTOS:
 * Se requiere un sistema que pueda correr en consola y que permita la atención
 * al cliente en un restaurante.
 * El sistema debe tener la capacidad de:
 * 1. Mostrar el menú disponible
 * 2. Permitir que el usuario pida elementos del menú
 * 3. Mostrar el costo total que el usuario debe pagar
 * 4. Cobrar al usuario
 * 5. Reportar el monto total de ventas realizadas
 */

/**
 * Mostrar el
 * menú disponible
 */

const mostrarMenu = () => {
    console.log('MENÚ:')
    products.forEach(element => console.log(`${element.product}: ${element.value} $`))
}

mostrarMenu()

/**
 * Permitir al usuario pedir elementos del menú
 */

let user = {
    name: 'Royer',
    age: 22
}

let pedido = []

const pedirProducto = product => {
    const productoEncontrado = typeof product === "string" ? products.find(element => element.product === product)
        : console.log('Ingrese un producto válido')

    productoEncontrado ? pedido.push(productoEncontrado) : console.log('El producto está fuera de stock')
}

// pedirProducto('Hamburguesa simple')

const verPedido = () => {
    console.log('PEDIDO ACTUAL\nProducto | Precio')
    pedido.forEach(element => console.log(`${element.product} | ${element.value} $`))
}

verPedido()

const calcularCosto = () => {
    let costoTotal = 0
    for (let element of pedido) {
        costoTotal+= element.value
    }
    console.log(`El valor total a pagar es de: ${costoTotal} dólares`)
}

calcularCosto()
