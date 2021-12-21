import { Component, OnInit } from '@angular/core';
import { Cachorro } from '../module/cachorro';
import { CachorrosService } from '../service/cachorros.service';

@Component({
  selector: 'app-listar-cachorros',
  templateUrl: './listar-cachorros.component.html',
  styleUrls: ['./listar-cachorros.component.css']
})
export class ListarCachorrosComponent implements OnInit {

  constructor(
    private cachorrosService: CachorrosService
  ) { 
  }

  title: string;
  filtro: string;
  cachorros: Cachorro[];

  ngOnInit() {
    this.cachorrosService.obterCachorros()
      .subscribe(
        cachorro => {
          this.cachorros = cachorro;
          console.log(cachorro);
        },
        (error) => console.log(error)
      );
      this.obterAdotados();
  }

  obterAdotados() {
    this.title = "Animais para adoção"
    this.filtro = "adocao"
  }

  obterEncontrados() {
    this.title = "Animais encontrados"
    this.filtro = "encontrados"
  }

  obterPerdidos() {
    this.title = "Animais perdidos"
    this.filtro = "perdidos"
  }

}