import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { IndicepobrezaService } from './indicepobreza.service';

describe('IndicepobrezaService', () => {
  let service: IndicepobrezaService;
  let http: HttpClient;

  const httpStub = {
    get: (_params: any) => of({
      "Indicadores": [
        {
          "indicator": {
            "id": "SI.POV.DDAY",
            "value": "Poverty headcount ratio at $1.90 a day (2011 PPP) (% of population)"
          },
          "country": {
            "id": "BR",
            "value": "Brazil"
          },
          "countryiso3code": "BRA",
          "date": "2021",
          "value": 0.0,
          "unit": "",
          "obs_status": "",
          "decimal": 1
        }
      ]}
    ) 
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: HttpClient,
        useValue: httpStub
      }]
    });
    service = TestBed.inject(IndicepobrezaService);
    http = TestBed.inject(HttpClient); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ele deve chamar o metodo get', () => {
    const spy = spyOn( http, 'get').and.callThrough();
    service.Listar("");
    expect(spy).toHaveBeenCalledWith("http://localhost:8080/indice-pobreza?pais=");
  })
});
