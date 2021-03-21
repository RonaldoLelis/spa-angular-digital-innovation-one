import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  title: string = 'Single Page Applications';

  constructor() { }

  ngOnInit(): void {
  }

}
