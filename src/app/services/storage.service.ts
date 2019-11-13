import { Injectable } from '@angular/core';

// En provideIn le digo quien injecta la instancia del servicio
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  usado: boolean;
  constructor() {
    this.usado = false;
    console.log(this.usado);
  }

  get(key: string): any {
    let data = JSON.parse(localStorage.getItem(key));
    if (!data) {
      data = [];
    } else {
      this.usado = true;
    }

    return data;
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
