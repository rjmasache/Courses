/**
 * Condicionales
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

