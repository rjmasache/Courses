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
 * Objeto que almacena los datos del usuario para su pedido y variables para almacenar datos
 * @type {{name: string, debt: number, age: number}}
 */

let user = {
    name: 'Royer',
    age: 22,
    debt: 0
}

let pedido = []

let ventas = 0

/**
 * Permitir al usuario pedir elementos del menú
 */

const pedirProducto = product => {
    const productoEncontrado = typeof product === "string" ? products.find(element => element.product === product)
        : console.log('Ingrese un producto válido')
    pedido.push(productoEncontrado)
}

pedirProducto('Hamburguesa doble')
pedirProducto('Refresco')

/**
 * Permitir al usuario ver su pedido actual
 */

const verPedido = () => {
    console.log('PEDIDO ACTUAL\nProducto | Precio')
    pedido.forEach(element => console.log(`${element.product} | ${element.value} $`))
}

verPedido()

/**
 * Calcular el costo del pedido
 */

const calcularCosto = () => {
    let costoTotal = 0
    for (let element of pedido) {
        costoTotal += element.value
    }
    user.debt = costoTotal
}

calcularCosto()

/**
 * Mostrar el valor final del pedido
 */

const finalizarPedido = () => {
    console.log(`Estimado ${user.name}, usted debe cancelar ${user.debt} dólares por la orden realizada`)
}

finalizarPedido()

/**
 * Permitir al usuario cancelar su pedido
 * @param dineroEntregado
 */

const pagarPedido = dineroEntregado => {
    if (typeof dineroEntregado === "number") {
        if (dineroEntregado === user.debt) {
            console.log('Deuda cancelada')
            ventas += user.debt
            user.debt = 0
        } else if (dineroEntregado > user.debt) {
            dineroEntregado = dineroEntregado - user.debt
            ventas += user.debt
            user.debt = 0
            console.log(`Deuda cancelada, su cambio es de ${dineroEntregado} dólares`)
        } else if (dineroEntregado < user.debt) {
            user.debt = user.debt - dineroEntregado
            ventas += dineroEntregado
            console.log(`Deuda pendiente, usted aún debe ${user.debt} dólares`)
        }
    } else {
        console.log('El dato ingresado no es válido')
    }
}

pagarPedido(10)

/**
 * Reporte de ventas realizadas
 */

const generarReporte = () => {
    console.log(`REPORTE DE VENTAS\nMonto total de ventas realizadas: ${ventas} dólares`)
}

generarReporte()
