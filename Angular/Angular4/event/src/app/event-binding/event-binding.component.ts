import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ev-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  nome: string = 'Daniel Silva';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  click(){
    alert('Fui clicado!');
  }

  onKey(event: KeyboardEvent){
    this.nome = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOver(){
    this.isMouseOver = !this.isMouseOver;
  }


  constructor() { }

  ngOnInit() {
  }

}
