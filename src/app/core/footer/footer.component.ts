import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../common.css', './footer.component.css' ]
})
export class FooterComponent implements OnInit {

  autor: string;
  fecha: string;

  constructor() { }

  ngOnInit() {
    this.fecha = new Date().toLocaleDateString();
    this.autor = 'Víctor González';
  }

}
