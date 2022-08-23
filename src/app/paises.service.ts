import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url = 'http://localhost:8080/paises'

  constructor(private http: HttpClient) { }

  Listar() {
    return  this.http.get<any>(`${this.url}`) 
  }
}
