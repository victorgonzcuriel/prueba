import { Directive, OnInit, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[docDestacar]'
})
export class DestacarDirective implements OnInit {

  // Entrada de datos de una directiva
  @Input()
  docDestacar: string;

  // Con elemento tengo el elemento del DOM donde se le llama
  constructor(public element: ElementRef) {
    console.log('Directiva Instanciada');
    // Añadir una clase css
    this.element.nativeElement.classList.add('destacar');
    this.element.nativeElement.innerHTML += this.docDestacar;
    console.dir(this.element);
  }

  ngOnInit(): void {
    console.log('Directiva aplicada');
    console.dir(this.element);
    console.log(this.docDestacar);
  }

  // Ejemplo de manejador de eventos (en este caso click)
  @HostListener('click')
  onClick() {
    console.log('Has hecho click');
  }

}
