import { Paises } from './../interfaces/paises';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators'  //ejecutar una accion cuando se recive una suscripcion

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlApi: string = 'https://restcountries.com/v3.1/all'

  constructor(
    private http: HttpClient
  ) { }

  getOctavio(){
    return this.http.get('https://api.github.com/users/octaviovillegas')
    .pipe(tap(console.log))
  }

  todosPises():Observable<Paises[]>{
    return this.http.get<Paises[]>(this.urlApi);
  }



}//fin
