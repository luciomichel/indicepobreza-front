import { Component, Input, OnInit } from '@angular/core';
import { IndicepobrezaService } from '../indicepobreza.service';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

	@Input() paisSelecionado!: string;  
  list!: Array<any>;
  paises!: Array<any>;

  constructor(private indiceService: IndicepobrezaService, private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.ListarPaises();
  }

	onSelected(){
    debugger;
    console.log(this.paisSelecionado)
    this.ListarIndice(this.paisSelecionado);
	}

  ListarIndice(paisSelecionado: string){
    this.indiceService.Listar(paisSelecionado).subscribe(dados => this.list = dados.Indicadores)
  }

  ListarPaises(){
    this.paisesService.Listar().subscribe(dados => this.paises = dados.Paises)
  }
}
