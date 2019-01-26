import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusando-componentes',
  templateUrl: './reusando-componentes.component.html',
  styleUrls: ['./reusando-componentes.component.css']
})
export class ReusandoComponentesComponent implements OnInit {

  nomeDoCurso: string = 'Angular 4';
  constructor() { }

  ngOnInit() {
  }

}
