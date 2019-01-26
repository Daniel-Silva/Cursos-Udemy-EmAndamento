import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusando-componentes',
  templateUrl: './reusando-componentes.component.html',
  styleUrls: ['./reusando-componentes.component.css']
})
export class ReusandoComponentesComponent implements OnInit {

  valorInicial: number = 15;
  nomeDoCurso: string = 'Angular 4';
  onMudouValor(event){
    console.log(event.novoValor);
  }
  constructor() { }

  ngOnInit() {
  }

}
