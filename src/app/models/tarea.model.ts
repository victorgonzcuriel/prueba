export interface TareaInterface {
    nombre: string;
    isCompleted: boolean;
}

// Modelos de datos
export class TareaModel implements TareaInterface {

    constructor(
        public nombre: string = '',
        public isCompleted: boolean = false
    ) {}
}
