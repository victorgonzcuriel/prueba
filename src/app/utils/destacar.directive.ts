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
  }

  ngOnInit(): void {
    console.log('Directiva aplicada');
    console.dir(this.element);
    console.log(this.docDestacar);
    // Añadir una clase css
    this.element.nativeElement.classList.add('destacar');
    this.element.nativeElement.innerHTML += this.docDestacar;
    console.dir(this.element);
  }

  // Ejemplo de manejador de eventos (en este caso click)
  @HostListener('click')
  onClick() {
    console.log('Has hecho click');
  }

}
