import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaisesService } from '../services/paises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'doc-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  continentes: Array<any>;
  selectedContinent: any;
  paises: Array<any>;
  selectedPais: any;
  selectedPaisData: any;

  constructor(private paisesService: PaisesService,
              private router: Router) { }

  ngOnInit() {
    this.continentes = environment.regions;
  }

  private onContinentChange() {
    if (this.selectedContinent) {
      this.paisesService.getPaises(this.selectedContinent.code).subscribe(response => this.paises = response);
    } else {
      this.paises = null;
    }
  }

  private onPaisChange() {
    if (this.selectedPais) {
      this.router.navigateByUrl('paises/pais/' + this.selectedPais.alpha3Code);
    }
  }

}
