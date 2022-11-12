/**
 * Crea un nuevo proyecto de Node
 *
 * - [X] Instala la dependencia Winston
 * - [X] En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
 * - [X] Registra el error en un archivo a través de un try...catch
 */
const logger = require ('./logger')

/**
 * Convierte el parámetro a Number. En caso de error lanza una excepción
 */
const convertirANumber = (num) => {
    let numAsNumber = Number(num)
    if (isNaN(numAsNumber)) {
        throw new TypeError(`'${num}' no es un número`)
    }
    return numAsNumber
}

/**
 * Suma dos números que se le pasan
 */
const suma = (a, b) => {
    // Este debug no sale en los logs porque tiene un nivel mayor al configurado en el logger
    logger.debug(`Sumando ${a} + ${b}`)

    const numA = convertirANumber(a)
    const numB = convertirANumber(b)
    return (numA + numB)
}

const listaValores = ['1.5',2,'3','ESTO PETA']
let resultado
try {
    resultado = suma(listaValores[0], listaValores[1])
    logger.info(`${listaValores[0]} + ${listaValores[1]} = ${resultado}`)

    resultado = suma(listaValores[0], listaValores[2])
    logger.info(`${listaValores[0]} + ${listaValores[2]} = ${resultado}`)

    resultado = suma(listaValores[0], listaValores[3])
    logger.info(`${listaValores[0]} + ${listaValores[3]} = ${resultado}`)
} catch (e) {
    logger.error(e.message);
}
