import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'doc-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais: any;
  paisCode: string;

  // Pillar datos del enrutamiento. 2 formas
  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private paisesService: PaisesService) {

     }

  ngOnInit() {
    this.paisCode = this.activateRoute.snapshot.params.id;
    this.paisesService.getPaisInfo(this.paisCode).subscribe(response => this.pais = response);
  }

}
