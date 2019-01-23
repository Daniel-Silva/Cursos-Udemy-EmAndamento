import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = "//lorempixel.com/400/200/nature/";
  imgAlt: string = 'Imagem de Natureza';


  getValor() {
    return 10;
  }

  getCurtirCurso(){
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}
