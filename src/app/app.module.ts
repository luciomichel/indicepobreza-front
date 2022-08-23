import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { IndicepobrezaService } from './indicepobreza.service';
import { PaisesService } from './paises.service';


@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ IndicepobrezaService, PaisesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
