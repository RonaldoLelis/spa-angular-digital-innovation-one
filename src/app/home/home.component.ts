import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  

  constructor() { }

  verFoto: boolean = false;
  like: boolean = false;
  

  ngOnInit(): void {
  }

  exibirFoto(){
    this.verFoto = true;
  }

  darLike(){
    this.like = true;
  }

}
