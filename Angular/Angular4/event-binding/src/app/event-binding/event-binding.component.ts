import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eb-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  nome: string = "Daniel Silva"
  constructor() { }

  ngOnInit() {
  }

  botaoClicado(){
    alert("Fui Clicado!");
  }

  onKeyUp(evento: KeyboardEvent){
    this.nome = (<HTMLInputElement>evento.target).value;
  }

}
