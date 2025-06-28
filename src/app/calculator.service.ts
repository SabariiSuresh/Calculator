import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

addition( a : number , b : number) : number {
  console.log("adding")
  return a + b ;
}

subtraction( a : number , b : number) : number {
  return a - b ;
}

multiplication( a : number , b : number) : number {
  return a * b ;
}

division( a : number , b : number) : number {

  if( b === 0 ){
    alert ('Cannot divide by zero')
  }
  return a / b ;
}


}
