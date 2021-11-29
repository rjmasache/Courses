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
    age: 22,
    debt: 0
}

let pedido = []

const pedirProducto = product => {
    const productoEncontrado = typeof product === "string" ? products.find(element => element.product === product)
        : console.log('Ingrese un producto válido')
    pedido.push(productoEncontrado)
}

pedirProducto('Hamburguesa simple')

const verPedido = () => {
    console.log('PEDIDO ACTUAL\nProducto | Precio')
    pedido.forEach(element => console.log(`${element.product} | ${element.value} $`))
}

verPedido()

const calcularCosto = () => {
    let costoTotal = 0
    for (let element of pedido) {
        costoTotal += element.value
    }
    user.debt = costoTotal
}

calcularCosto()

const finalizarPedido = () => {
    console.log(`Estimado ${user.name}, usted debe cancelar ${user.debt} dólares por la orden realizada`)
}

finalizarPedido()

const pagarPedido = dineroEntregado => {
    let cambio = 0
    if (typeof dineroEntregado === "number") {
        if (dineroEntregado === user.debt) {
            console.log('Deuda cancelada')
            user.debt = 0
        } else if (dineroEntregado > user.debt) {
            cambio = dineroEntregado - user.debt
            user.debt = 0
            console.log(`Deuda cancelada, su cambio es de ${cambio} dólares`)
        } else if (dineroEntregado < user.debt) {
            cambio = user.debt - dineroEntregado
            user.debt = cambio
            console.log(`Deuda pendiente, usted aún debe ${cambio} dólares`)
        }
    } else {
        console.log('El dato ingresado no es válido')
    }
}

pagarPedido(1)
