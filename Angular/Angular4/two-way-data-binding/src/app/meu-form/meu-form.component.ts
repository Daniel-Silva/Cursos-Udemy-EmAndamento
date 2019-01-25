import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdb-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'Daniel';

  pessoa: any = {
    nome: 'Matheus',
    idade: 3
  };
  
  constructor() { }

  ngOnInit() {
  }

}
