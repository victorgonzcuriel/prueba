import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private client: HttpClient) { }

  getPaises(continentCode: string): Observable<Array<{name: string, alphaCode: string}>> {
    return this.client.get(environment.urlPaises + continentCode) as Observable<Array<{name: string, alphaCode: string}>>;
  }

  getPaisInfo(paisCode: string): Observable<Array<any>> {
    return this.client.get(environment.urlInfoPais + paisCode) as Observable<Array<any>>;
  }
}
