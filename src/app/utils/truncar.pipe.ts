import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})

// Ejemplo de pipe. Implementa el interfaz PipeTransform.
export class TruncarPipe implements PipeTransform {

  // Transformación del valor (primer argumento) en funcion de los argumentos (segundo argumento)
  // Para llamar value | truncar : arg1: arg2 : ... : argn
  transform(value: any, ...args: any[]): any {
    const limit = args[0] || 10;
    return (value.length > limit) ? value.substr(0, limit) + '...' : value;
  }

}
