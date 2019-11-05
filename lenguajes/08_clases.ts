class Person {
    constructor(public nombre: string, public edad: number, public empleo: string = '') {

    }
}

interface Joven{
    aficiones: Array<string>;
}


class Alumno extends Person implements Joven{
    aficiones: string[];
    constructor(nombre: string, edad: number, public curso: string){
        super(nombre, edad);

    }
}

// declaraciones
let user1: Person;
let user2: Joven;

// declaracion directa de una interfaz
user2 = {aficiones: []};
