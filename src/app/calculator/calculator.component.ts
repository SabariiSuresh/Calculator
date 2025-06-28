import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule , CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

num1! : number 
num2! : number 
result : number | string = '';

constructor( private calculatorService : CalculatorService ){}

calculate(operations:string){
  switch(operations){
    case 'addition' : this.result = this.calculatorService.addition(this.num1,this.num2);
    break;
    case 'subtraction' : this.result = this.calculatorService.subtraction(this.num1,this.num2);
    break;
    case 'multiplication' : this.result = this.calculatorService.multiplication(this.num1,this.num2);
    break;
    case 'division' : this.result = this.calculatorService.division(this.num1,this.num2);
    break;
    default :
    this.result = 'invalid'
  } 
}
clear(){
  this.num1 = 0;
  this.num2 = 0;
 this.result ='';
}
}
