// importar el modulo nativo de node para leer lo que se escriba por teclado
const readline = require('readline');

// crear una interfaz para leer la entrada y escribir la salida
const rl = readline.createInterface({
  input: process.stdin, // Leer entrada desde la entrada estándar (teclado)
  output: process.stdout // Escribir salida en la salida estándar (consola)
});

const welcome = "----- 💙 Bienvenido a la calculadora de Generation 💙 -----"
const operations = `${welcome}
¿Qué deseas realizar?
1 -> ➕ Sumar
2 -> ➖ Restar
3 -> ✖️ Multiplicar
4 -> ➗ Dividir
Ingresa tu opción: `;

// OPERACIONES
const add = (addend1, addend2) => {
  return addend1 + addend2;
};

const subtract = (minuend, subtrahend) => {
  return minuend - subtrahend;
};

const multiply = (multiplicand, multiplier) => {
  return multiplicand * multiplier;
};

const divide = (dividend, divisor) => {
  return dividend / divisor;
};

// SWITCH DE OPERACION SELECCIONADA
const operationSelected = (operationNum, num1, num2) => {
  let resultado = 0;

  switch (operationNum) {
    case 1:
      resultado = add(num1, num2);
      console.log(`El resultado de la suma es: ${resultado}`);
      break;

    case 2:
      resultado = subtract(num1, num2);
      console.log(`El resultado de la resta es: ${resultado}`);
      break;

    case 3:
      resultado = multiply(num1, num2);
      console.log(`El resultado de la multiplicación es: ${resultado}`);
      break;

    case 4:
      if (num2 === 0) {
        console.log("Error: No se puede dividir entre cero.");
      } else {
        resultado = divide(num1, num2);
        console.log(`El resultado de la división es: ${resultado}`);
      }
      break;

    default:
      console.log("Opción no válida. Por favor elige un número del 1 al 4.");
      break;
  }
}

rl.question(operations, (operationNumSelected) => {
  const opcion = parseInt(operationNumSelected);

  rl.question('Ingresa el primer número: ', (firstNum) => {
    const num1 = parseInt(firstNum);
    rl.question('Ingresa el segundo número: ', (secondNum) => {
      const num2 = parseInt(secondNum);
      operationSelected(opcion, num1, num2);
      rl.close();
    });
  });
});