import { LibroModel } from './libro.model';

export const LIBROS: Array<LibroModel> = [
    new LibroModel(['Pepe Perez'], 'Angular'),
    {autores: ['Juan Lopez'], titulo: 'Más Angular'},
    {autores: ['Ernesto Ramirez'], titulo: 'Angular avanzado'}
];
