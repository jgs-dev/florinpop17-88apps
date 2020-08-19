import { Component, OnInit } from '@angular/core';
import { CalculatorService } from "./../services/calculator.service"

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void { }

  addElement(element) {
    let display = document.querySelector("textarea")
    display.value += element
  }

  addDecimal(){
    let display = document.querySelector("textarea")
    if(![...display.value].includes(",")){
      display.value += ","
    }
    
  }

}
