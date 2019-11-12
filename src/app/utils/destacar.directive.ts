import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[docDestacar]'
})
export class DestacarDirective implements OnInit {

  // Entrada de datos de una directiva
  @Input()
  docDestacar: string;
  // Con elemento tengo el elemento del DOM donde se le llama
  constructor(public element: ElementRef) { }

  ngOnInit(): void {
    console.log('Directiva aplicada');
    console.dir(this.element);
    console.log(this.docDestacar);
  }

}
