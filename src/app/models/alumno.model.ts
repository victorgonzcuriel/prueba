export interface MaestrosIf {
    id: string;
    nombre: string;
    descripcion: string;
}

export class AlumnoModel {
    constructor(
        public nombre: string = '',
        public apellido: string = '',
        public correo: string = '',
        public passw: string = '',
        public nacimiento: string = '',
        public comentarios: string = '',
        public isOk: boolean = false,
        public curso: MaestrosIf = null,
        public turno: MaestrosIf = null
    ) {
    }
}
