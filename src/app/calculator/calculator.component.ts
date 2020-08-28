import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { CalculatorService } from "./../services/calculator.service"

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  input: HTMLInputElement
  savedInput: HTMLInputElement

  flagDecimal: boolean
  flagNewNumber: boolean
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.input = <HTMLInputElement>document.getElementById("input")
    this.savedInput = <HTMLInputElement>document.getElementById("savedInput")
  }

  defineOperation(symbol: string) {

    this.savedInput.value += `${this.input.value} ${symbol} `
    this.input.value = this.calculatorService.addInstruction(this.input.value, symbol)

    if (symbol == "=") {
      this.savedInput.value += `${this.input.value} | `
    }

    this.flagNewNumber = true
  }

  addDecimal() {
    if (this.flagNewNumber) {
      this.input.value = "0."
      this.flagNewNumber = false
      this.flagDecimal = true
    } else if (!this.input.value.includes(".")) {
      if (this.input.value == "") {
        this.input.value = "0."
      }
      this.flagDecimal = true
    }
  }

  addNumber(number: number) {
    if (this.input.value == "0" || this.flagNewNumber) {
      this.input.value = `${number}`
      this.flagNewNumber = false
    } else if (this.flagDecimal) {
      if (this.input.value.length - 1 - this.input.value.indexOf(".") < 3) {
        this.input.value += number
      }
    } else if (this.input.value.length < 8) {
      this.input.value += number
    }
  }

  clear() {
    this.input.value = "0"
  }

  clearAll() {
    this.savedInput.value = ""
    this.calculatorService.clearAllInstructions()
    this.clear()
  }

}
