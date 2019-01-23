import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ae-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = "//lorempixel.com/400/200/nature/";
  imgAlt: string = 'Imagem de Natureza';


  getValor() {
    return 10;
  }

  getCurtiCurso(){
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
