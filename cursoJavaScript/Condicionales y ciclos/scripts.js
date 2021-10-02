/**
 * Condicionales:
 * if, if else, if else if
 */

/**
 * Invitación a una fiesta
 * con la condición de que si eres mayor de edad
 * y menor a 65 años, puedes venir a la fiesta.
 * De lo contrario, si tienes permiso de tus tutores, puedes venir.
 * De lo contrario, quédate en casa
 */

let persona = 'Jessica'
let edad = 22
let permiso = true

if (edad >= 18 && edad <= 65) {
    console.log(`${persona} sí puede ir a la fiesta porque tiene ${edad} años`)
} else if (permiso && edad < 18) {
    console.log(`${persona} sí puede ir a la fiesta porque tiene el permiso de sus tutores`)
} else {
    console.log(`${persona} no puede ir a la fiesta porque tiene ${edad} años`)
}

/**
 * Condicionales múltiples:
 * Switch
 */

/**
 * ¿Qué rol en Front end eres?
 * Si diseñas flujos de usuario eres Diseñador UI,
 * Si llevas el diseño a código HTML y CSS eres Maquetador,
 * Si agregas datos y lógica eres Programador Front end
 * Si no cumples dichas características, no formas parte del Front end
 */

let rol = 'Datos y lógica'

switch (rol) {
    case 'Flujos de usuario':
        console.log('Eres Diseñador UI')
        break
    case 'Diseño a código HTML y CSS':
        console.log('Eres Maquetador')
        break
    case 'Datos y lógica':
        console.log('Eres Programador Front end')
        break
    default:
        console.log('No formas parte del Front end')
}

/**
 * Ciclos:
 * For
 */

for (let i = 0; i < 10; i++) {
    console.log(i)
}
