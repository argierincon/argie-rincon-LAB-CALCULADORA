// importar el modulo nativo de node para leer lo que se escriba por teclado
const readline = require('readline');

function principal() {
  // crear una interfaz para leer la entrada y escribir la salida
  const rl = readline.createInterface({
    input: process.stdin, // Leer entrada desde la entrada estándar (teclado)
    output: process.stdout // Escribir salida en la salida estándar (consola)
  });

  const bienvenida = "----- 💙 Bienvenido a la calculadora de Generation 💙 -----"
  const menu = `${bienvenida}
    ¿Qué deseas realizar?
    1 -> ➕ Sumar
    2 -> ➖ Restar
    3 -> ✖️ Multiplicar
    4 -> ➗ Dividir
    5 -> ❓ Verificar si es Par
    6 -> ❓ Verificar si es Entero
    Ingresa tu opción: `;

  rl.question(menu, (opcSeleccionada) => {
    const opcion = parseInt(opcSeleccionada.trim());

    const instrunctions = "Ingresa los números separados por comas (ejemplo: 5, 7, 9): ";

    rl.question(instrunctions, (listaNumeros) => {
      const numeros = listaNumeros.split(',').map(num => parseFloat(num.trim()));

      seleccionarOperacion(opcion, numeros);
      rl.close();
    });
  });

  function seleccionarOperacion(opcion, numeros) {
    let resultado = 0;

    switch (opcion) {
      case 1:
        resultado = sumarMultiplesNumeros(numeros);
        console.log(`El resultado de la suma es: ${resultado}`);
        break;

      case 2:
        resultado = restarMultiplesNumeros(numeros);
        console.log(`El resultado de la resta es: ${resultado}`);
        break;

      case 3:
        resultado = multiplicarMultiplesNumeros(numeros);
        console.log(`El resultado de la multiplicación es: ${resultado}`);
        break;

      case 4:
        resultado = dividirMultiplesNumeros(numeros);
        if (typeof resultado === 'string') {
          console.log(resultado);
        } else {
          console.log(`El resultado de la división es: ${resultado}`);
        }
        break;

      case 5:
        resultado = esPar(numeros[0]);
        console.log(`El número ${numeros[0]} ${resultado ? 'ES par' : 'NO es par'}.`);
        break;

      case 6:
        resultado = esEntero(numeros[0]);
        console.log(`El número ${numeros[0]} ${resultado ? 'ES entero' : 'NO es entero'}.`);
        break;

      default:
        console.log("Opción no válida. Por favor elige un número del 1 al 6.");
        break;
    }
  }
}

// Funciones requeridas para la calificación automática
function sumarMultiplesNumeros(numeros) {
  let acc = 0;

  for (let i = 0; i < numeros.length; i++) {
    acc = acc + numeros[i];
  }
  return acc;
}

function restarMultiplesNumeros(numeros) {
  let acc = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    acc = acc - numeros[i];
  }

  return acc;
}

function multiplicarMultiplesNumeros(numeros) {
  let acc = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    acc = acc * numeros[i];
  }

  return acc;
}


function dividirMultiplesNumeros(numeros) {
  let acc = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] === 0) {
      return "Error: No se puede dividir entre cero.";
    }
    acc = acc / numeros[i];
  }

  return acc;
}

function esPar(numero) {
  return numero % 2 === 0;
}

function esEntero(numero) {
  return Number.isInteger(numero);
}

// Exportar funciones para pruebas (estilo Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    sumarMultiplesNumeros,
    multiplicarMultiplesNumeros,
    esPar,
    esEntero
  };
}

// Ejecutar la función principal si este archivo se ejecuta directamente
if (require.main === module) {
  principal();
}