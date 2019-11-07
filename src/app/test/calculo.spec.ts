import {factorial} from './calculo';

// Pruebas automaticas con Jasmine
// La f es para fixed, que no me saque todos sino todos los f(en describe y it)
describe('Pruebas del factorial', () => {

    it('el factorial de 0 dara 1', () => {
        expect(factorial(1)).toBe(1);
    });

    it('el factorial de 1 dara 1', () => {
        expect(factorial(0)).toBe(1);
    });

    it('el factorial de 5 dara 120', () => {
        expect(factorial(5)).toBe(120);
    });
});
