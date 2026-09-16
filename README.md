Instrucciones

Ahora es tu oportunidad de construir una mejor calculadora. Tu calculadora puede funcionar como tú quieras, pero debe ser usable como una calculadora.

Primero, vamos a separar nuestra lógica interactiva dentro de la función principal(), así:

function principal() {
  console.log("¡Hola, estudiantes!");
}

if (require.main === module) {
  principal();
}

Este es código repetitivo (boilerplate) de JavaScript, que solo se ejecutará cuando el programa sea invocado por una persona. Todo tu código debe estar ahora dentro de una función, ya sea esta función principal() (donde puedes poner cosas como sentencias de entrada) u otra función.

---

REQUISITOS PREVIOS

Antes de comenzar, asegúrate de tener Node.js instalado en tu computadora (descárgalo aquí: https://nodejs.org/)

Verifica la instalación:

node --version

---

CONFIGURACIÓN DEL PROYECTO

1. Crea el directorio del proyecto:

mkdir proyecto-calculadora
cd proyecto-calculadora

2. Crea los archivos requeridos:
   - main.js (tu implementación en JavaScript)
   - test.js (el archivo de pruebas - cópialo del código proporcionado)

---

FUNCIONES REQUERIDAS

La calificación automática se puntuará sobre 8 y evaluará la funcionalidad de las siguientes funciones:

### sumarMultiplesNumeros([num, num, ..])

- Esta función debe existir en tu programa.
- Debe recibir una lista de números como entrada.
- Debe devolver la suma de esos números.
- Ejemplo: sumarMultiplesNumeros([5,7,9]) debe devolver 21.

### multiplicarMultiplesNumeros([num, num, ..])

- Esta función debe existir en tu programa.
- Debe recibir una lista de números como entrada.
- Debe devolver el resultado de multiplicar cada número sucesivamente con el siguiente.
- Ejemplo: multiplicarMultiplesNumeros([4,5,6,7]) debe devolver 840.

### esPar(numero)

- Esta función debe existir en tu programa.
- Debe recibir un solo número como entrada.
- Debe devolver un valor booleano: true si el número es un entero par, false en caso contrario.
- Ejemplo: esPar(6) debe devolver true, esPar(-3.8) debe devolver false.

### esEntero(numero)

- Esta función debe existir en tu programa.
- Debe recibir un solo número como entrada.
- Debe devolver un valor booleano: true si el número es un entero, false en caso contrario.
- Ejemplo: esEntero(3) debe devolver true, esEntero(7.3) debe devolver false.

---

CÓMO EJECUTAR TU CÓDIGO

### Probar tu programa principal:

node main.js

### Ejecutar las pruebas de calificación automática:

node test.js

---

SALIDA DE LAS PRUEBAS

Cuando ejecutes las pruebas, verás una salida como esta:

Puntaje: 8/8
¡Todas las pruebas pasaron!

---

DETALLES DE LAS PRUEBAS

El sistema de calificación automática ejecutará 8 pruebas:

1. Prueba 1: sumarMultiplesNumeros([5,7,9]) → debe devolver 21
2. Prueba 2: sumarMultiplesNumeros([5,-7,9.3]) → debe devolver 7.3
3. Prueba 3: multiplicarMultiplesNumeros([4,5,6,7]) → debe devolver 840
4. Prueba 4: multiplicarMultiplesNumeros([4,-5,6.7]) → debe devolver -134
5. Prueba 5: esPar(6) → debe devolver true
6. Prueba 6: esPar(-3.8) → debe devolver false
7. Prueba 7: esEntero(3) → debe devolver true
8. Prueba 8: esEntero(7.3) → debe devolver false

---

PLANTILLA DE EJEMPLO PARA main.js

Comienza con esta plantilla e implementa las cuatro funciones requeridas:

function principal() {
  console.log("¡Hola, estudiantes!");
}

// TODO: Implementa estas funciones
function sumarMultiplesNumeros(numeros) {
  // Tu código aquí
}

function multiplicarMultiplesNumeros(numeros) {
  // Tu código aquí
}

function esPar(numero) {
  // Tu código aquí
}

function esEntero(numero) {
  // Tu código aquí
}

// Ejecutar la función principal si este archivo se ejecuta directamente
if (require.main === module) {
  principal();
}

---

FLUJO DE TRABAJO DE DESARROLLO

1. Edita tu archivo main.js e implementa las funciones.
2. Prueba ejecutando: node test.js
3. Depura las pruebas que fallen leyendo los mensajes de error.
4. Repite hasta que todas las pruebas pasen (Puntaje: 8/8).

---

CONSEJOS DE JAVASCRIPT

- Usa Array.reduce() para operaciones matemáticas sobre arreglos.
- Usa Number.isInteger() para verificar si un número es un entero.
- Usa numero % 2 === 0 para verificar si un número es par.
- Recuerda que un número debe ser tanto un entero COMO divisible por 2 para ser "par".

---

SOLUCIÓN DE PROBLEMAS

### Error "Node.js not found":
- Asegúrate de que Node.js esté instalado y agregado a tu PATH.
- Intenta ejecutar node --version para verificar la instalación.

### Errores en las funciones de JavaScript:
- Asegúrate de que las cuatro funciones estén implementadas en main.js.
- Verifica que los nombres de las funciones estén escritos exactamente como se requiere.
- Asegúrate de que tus funciones devuelvan valores (no solo los impriman).

### Las pruebas siguen fallando:
- Lee los mensajes de error con atención. Muestran los resultados esperados vs. los reales.
- Prueba tus funciones manualmente:
  node -e "const fs=require('fs');eval(fs.readFileSync('main.js','utf8'));console.log(sumarMultiplesNumeros([1,2,3]))"

---

NOTAS IMPORTANTES

Recuerda: ¡Este proyecto será calificado automáticamente, y los computadores son muy literales!

Nota: ¡Usa las pruebas! No hay nada de malo en ejecutar las pruebas hasta que pasen. ¡No es hacer trampa!

Nota: Si te quedas atascado con una función, intenta trabajar en otra diferente. Puede que descubras que puedes resolver funciones posteriores más rápido que las anteriores.

---

ESTRUCTURA FINAL DE ARCHIVOS:

proyecto-calculadora/
├── main.js              # Tu implementación en JavaScript
├── test.js              # Archivo de pruebas (proporcionado)
└── README.md            # Este archivo de instrucciones

---

¡Buena suerte construyendo tu calculadora!