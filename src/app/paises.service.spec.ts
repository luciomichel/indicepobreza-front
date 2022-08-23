import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PaisesService } from './paises.service';

describe('PaisesService', () => {
  let service: PaisesService;
  let http: HttpClient;

  const httpStub = {
    get: (_params: any) => of({
      "Paises": [
        {
          "id": "ABW",
          "iso2Code": "AW",
          "name": "Aruba",
          "region": {
            "id": "LCN",
            "iso2code": "ZJ",
            "value": "Latin America & Caribbean "
          }
        }]}
    ) 
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: HttpClient,
        useValue: httpStub
      }]
    });
    service = TestBed.inject(PaisesService);
    http = TestBed.inject(HttpClient); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ele deve chamar o metodo get', () => {
    const spy = spyOn( http, 'get').and.callThrough();
    service.Listar();
    expect(spy).toHaveBeenCalledWith("http://localhost:8080/paises");
  })
});
