import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'doc-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.css']
})
export class SaludoRefComponent implements OnInit {

  // Decorador para ver cosas del padre al hijo
  @ViewChild('refNombre', {static: true}) nodoNombre: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.nodoNombre.nativeElement);
    console.dir(this.nodoNombre);
  }

}
