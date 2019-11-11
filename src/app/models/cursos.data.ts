import { MaestrosIf } from './alumno.model';

export const CURSOS: Array<MaestrosIf> = [
    {id: 'AN_01', nombre: 'Angular', descripcion: 'Aprendiendo Angular...'},
    {id: 'HT_02', nombre: 'HTML', descripcion: 'Aprendiendo HTML5'},
    {id: 'CS_03', nombre: 'css', descripcion: 'Aprendiendo CSS'}
];

export const TURNOS: Array<MaestrosIf> = [
    {id: 'M', nombre: 'Mañana', descripcion: '9:00-14:00'},
    {id: 'T', nombre: 'Tarde', descripcion: '16:00-20:00'},
    {id: 'N', nombre: 'Noche', descripcion: '19:00-22:00'},
];
