// Evaluación de Laboratorio de JavaScript: Calculadora Básica

// Objetivo:
// Diseña y construye una calculadora que pueda sumar, restar, multiplicar y dividir dos números.

// Instrucciones:
// Completa las partes faltantes del código a continuación. Piensa cuidadosamente en el orden de las condiciones.
// Debes manejar correctamente las operaciones +, -, * y / usando lógica condicional.

// Ejemplo de uso:
// node calculator.js 10 5 +
// Salida: 15

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

// Obtener los valores de entrada desde la línea de comandos
const args = process.argv.slice(2);

// Convertir las dos primeras entradas a números
const num1 = Number(args[0]);
const num2 = Number(args[1]);

// Obtener el operador (ej. "+", "-", "*", "/")
const operator = args[2];

// Variable para almacenar el resultado final
let result;

// Paso 2: Decidir qué operación realizar
// Pistas:
// - Usa sentencias if, else if y else para verificar el operador y realizar la operación correspondiente.
// - Asegúrate de usar el operador de igualdad estricta (===) para comparar
// tanto el valor como el tipo de la entrada.
// Esto ayuda a evitar errores causados por la conversión automática de tipos de JavaScript.

if (operator === '+') {
  result = add(num1, num2);
} else if (operator === '-') {
  result = subtract(num1, num2);
} else if (operator === '*') {
  result = multiply(num1, num2);
} else if (operator === '/') {
  if (num2 === 0) {
    result = 'No se puede dividir por cero';
  } else {
    result = divide(num1, num2);
  }
} else {
  result = 'Operador inválido';
}

// Paso 3: Imprimir el resultado
console.log(result);