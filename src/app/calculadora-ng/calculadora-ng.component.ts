import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculadora-ng',
  templateUrl: './calculadora-ng.component.html',
  styleUrls: ['./calculadora-ng.component.css']
})
export class CalculadoraNgComponent {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  @Input()
  tituloARecibir: string = "";

  constructor() {}

  sumameEsta(){
    this.resultado = this.num1 + this.num2
  }

}
