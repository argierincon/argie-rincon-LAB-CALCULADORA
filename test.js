const assert = require('assert');
const { sumarMultiplesNumeros, multiplicarMultiplesNumeros, esPar, esEntero } = require('./main');

// Funciones de prueba
function probarSumarMultiplesEnterosPositivos() {
    const respuesta = sumarMultiplesNumeros([5, 7, 9]);
    assert.strictEqual(respuesta, 21);
}

function probarSumarMultiplesNumerosComplicados() {
    const respuesta = sumarMultiplesNumeros([5, -7, 9.3]);
    assert.strictEqual(Math.round(respuesta * 10) / 10, 7.3); // Redondear a 1 decimal
}

function probarMultiplicarMultiplesEnterosPositivos() {
    const respuesta = multiplicarMultiplesNumeros([4, 5, 6, 7]);
    assert.strictEqual(respuesta, 840);
}

function probarMultiplicarMultiplesNumerosComplicados() {
    const respuesta = multiplicarMultiplesNumeros([4, -5, 6.7]);
    assert.strictEqual(Math.round(respuesta), -134);
}

function probarSiSeisEsPar() {
    const respuesta = esPar(6);
    assert.strictEqual(respuesta, true);
}

function probarSiMenosTresPuntoOchoEsPar() {
    const respuesta = esPar(-3.8);
    assert.strictEqual(respuesta, false);
}

function probarSiTresEsEntero() {
    const respuesta = esEntero(3);
    assert.strictEqual(respuesta, true);
}

function probarSiSietePuntoTresEsEntero() {
    const respuesta = esEntero(7.3);
    assert.strictEqual(respuesta, false);
}

// Ejecutar todas las pruebas
if (require.main === module) {
    const pruebas = [
        { nombre: "Prueba 1: Sumar múltiples enteros positivos", func: probarSumarMultiplesEnterosPositivos },
        { nombre: "Prueba 2: Sumar múltiples números complicados", func: probarSumarMultiplesNumerosComplicados },
        { nombre: "Prueba 3: Multiplicar múltiples enteros positivos", func: probarMultiplicarMultiplesEnterosPositivos },
        { nombre: "Prueba 4: Multiplicar múltiples números complicados", func: probarMultiplicarMultiplesNumerosComplicados },
        { nombre: "Prueba 5: ¿Seis es par?", func: probarSiSeisEsPar },
        { nombre: "Prueba 6: ¿-3.8 es par?", func: probarSiMenosTresPuntoOchoEsPar },
        { nombre: "Prueba 7: ¿Tres es entero?", func: probarSiTresEsEntero },
        { nombre: "Prueba 8: ¿7.3 es entero?", func: probarSiSietePuntoTresEsEntero },
    ];

    let aprobadas = 0;
    const total = pruebas.length;

    console.log("Ejecutando pruebas de JavaScript...");
    console.log("=".repeat(50));

    for (const prueba of pruebas) {
        try {
            prueba.func();
            console.log(`[OK] ${prueba.nombre}`);
            aprobadas++;
        } catch (e) {
            console.log(`[FALLO] ${prueba.nombre}: ${e.message}`);
        }
    }

    console.log("=".repeat(50));
    console.log(`Puntaje: ${aprobadas}/${total}`);
    if (aprobadas === total) {
        console.log("¡Todas las pruebas pasaron!");
    } else {
        console.log("Algunas pruebas fallaron. Revisa tus funciones de JavaScript.");
    }
}