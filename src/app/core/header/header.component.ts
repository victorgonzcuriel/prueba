import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-header',
  templateUrl: './header.component.html',
  styleUrls: ['../common.css', './header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;
  // Ejemplo de logo. MIRAR EL PUTO LOGO QUE NO CARGA
  logo: string;
  constructor() { }

  ngOnInit() {
    this.title = 'Angular-Docout';
    this.logo = '../../../assets/logo.svg';
  }

}
