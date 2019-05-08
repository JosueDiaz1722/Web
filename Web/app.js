const tiempoA=require('./tiempo.js');
console.log("tiempo",tiempoA);
const suma=require('./sumaDosNumeros.js');
console.log('Suma: ',suma.nombreApp,suma.sumar(1,2));

const numero = require('./numero.js');
console.log('Numero:', numero);

const calculadora = require('./calculadora/calculadora.js');

console.log(calculadora.nombreApp,
    'Suma: ',calculadora.suma(1,3),
    'Resta: ',calculadora.resta(5,3),
    'Producto: ', calculadora.producto(5,5),
    'Division: ', calculadora.division(25,5)
    );