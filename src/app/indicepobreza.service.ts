import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicepobrezaService {

  constructor(private http: HttpClient) { }

  Listar(paisSelecionado: string) {
    let url = 'http://localhost:8080/indice-pobreza?pais=' + paisSelecionado;
    return  this.http.get<any>(`${url}`) 
  }
}
