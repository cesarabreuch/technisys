const chai = require('chai');
const indexMock = require('../mock/index');


describe('Pruebas unitarias Index',()=>{

  it('Al ingresar numero primo, esPrimo() debe retornar true',()=>{
    const esPrimo = indexMock.esPrimo(5);
    chai.assert.equal(esPrimo, true);
  });

  it('Al ingresar numero no primo, esPrimo() debe retornar false',()=>{
    const esPrimo = indexMock.esPrimo(10);
    chai.assert.equal(esPrimo, false);
  });

  it('Al ingresar un valor distinto a numero, deberia lanzar un error', ()=>{
    const mensaje = 'Solo números';
    chai.assert.throw(indexMock.esPrimo, mensaje);
  });

  it('Al ingresar un numero cualquiera, deberia imprimir los numeros primos desde ese numero hasta el 2, en forma descendente',()=>{
    const lista = indexMock.imprimirPrimos(7);
    const resultado = {primos: [7,5,3,2]};
    chai.assert.deepEqual(lista, resultado);
  });

  it('Al ingresar un valor distinto a un numero, deberia lanzar un error',()=>{
    const mensaje = 'El dato introducido debe ser un número';
    chai.assert.throw(indexMock.imprimirPrimos, mensaje);
  })

});

