import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusando-componentes',
  templateUrl: './reusando-componentes.component.html',
  styleUrls: ['./reusando-componentes.component.css']
})
export class ReusandoComponentesComponent implements OnInit {

  valorInicial: number = 15;
  nomeDoCurso: string = 'Angular 4';
  valor: number = 5;
  deletarCiclo: boolean = false;

  destruirCiclo() {
    this.deletarCiclo = true;
  }
  onMudouValor(event){
    console.log(event.novoValor);
  }
  mudarValor() {
    this.valor++;
  }

  constructor() { }

  ngOnInit() {
  }

}
