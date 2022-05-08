import {createPhoneNumber, sumaElementos, objectsCompare} from '../index.js';

describe("funcion sumaElementos", () => {
  test('la respuesta debe ser un numero', () => { 
    let respuesta = sumaElementos([1,2]);
    expect('number').toBe(typeof(respuesta))
    
 })
})

describe("funcion createPhoneNumber", () => {
  test('compraracion del formato', () => { 
    let formatoCorrecto = "(123) 456-7890";
    let respuesta2 = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    expect(formatoCorrecto).toBe(respuesta2)
 })
})

describe("funcion objectsCompare", () => {
  test('compraracion del objeto', () => { 
    let obj1 = {uno:1, dos:2};
    let obj2 = {uno:1, dos:2};

    let respuesta3 = objectsCompare(obj1,obj2);
    expect(true).toBe(respuesta3)
 })
})