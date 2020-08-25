import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { CalculatorService } from "./../services/calculator.service"

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  savedInput: number
  flagNewNumber: boolean
  flagEqual: boolean
  /**
   * @var operationToDo will save which operation the calculator needs to do after an operation is pushed 
   */
  operationToDo
  /**
   * @var inputElement 
   */
  inputElement: HTMLInputElement

  /**
   * @var savedInputElement
   */
  savedInputElement: HTMLInputElement


  constructor(private calculatorService: CalculatorService) { }


  ngOnInit() {
    this.inputElement = <HTMLInputElement>document.getElementById("input")
    this.savedInputElement = <HTMLInputElement>document.getElementById("savedInput")
    this.operationToDo = () => { false }
  }

  /**
   * @method addNumber will add the input number in the display of the calculator, if there's
   * a flag for a new number (after an operation has been pushed) it will save the number on top
   * of the display and erase the input for the new number
   * @param number number that the user clicked in the interface
   */
  addNumber(number: number) {
    if (this.flagEqual) {
      this.savedInputElement.value = ""
      this.setSavedInput(0)
      this.flagEqual = false
    }

    if (this.flagNewNumber) {
      this.inputElement.value = "" + number
      this.flagNewNumber = false
    } else {
      if (this.inputElement.value.length < 8) {
        this.inputElement.value += number
      }
    }
  }

  defineOperation(symbol: string) {
    if (this.flagEqual) {
      this.saveInputAfterEqual(symbol)
    } else {
      this.saveInput(symbol)
    }

    if (!this.getSavedInput()) {
      this.setSavedInput(parseFloat(this.inputElement.value))
    }

    this.operationToDo()

    switch (symbol) {
      case "+":
        this.operationToDo = this.add
        break
      case "-":
        this.operationToDo = this.subtract
        break
      case "*":
        this.operationToDo = this.multiply
        break
      case "/":
        this.operationToDo = this.divide
        break
    }
  }
  saveInputAfterEqual(symbol: string) {
    this.savedInputElement.value = `${this.inputElement.value} ${symbol} `
    this.flagEqual = false
  }

  saveInput(symbol: string) {
    this.savedInputElement.value += `${this.inputElement.value} ${symbol} `
    this.flagNewNumber = true
  }

  add() {
    this.setSavedInput(this.savedInput + parseFloat(this.inputElement.value))
    this.inputElement.value = "" + this.getSavedInput()
  }

  subtract() {
    this.setSavedInput(this.savedInput - parseFloat(this.inputElement.value))
    this.inputElement.value = "" + this.getSavedInput()
  }

  divide() {
    this.setSavedInput(this.savedInput / parseFloat(this.inputElement.value))
    this.inputElement.value = "" + this.getSavedInput()
  }

  multiply() {
    this.setSavedInput(this.savedInput * parseFloat(this.inputElement.value))
    this.inputElement.value = "" + this.getSavedInput()
  }

  equal() {
    this.savedInputElement.value += `${this.inputElement.value} = `
    this.operationToDo()
    this.flagNewNumber = true;
    this.flagEqual = true
    this.operationToDo = () => { false }
  }

  addDecimal() {
    if (![...this.inputElement.value].includes(".")) {
      this.inputElement.value += "."
    }
  }

  clear() {

  }

  clearAll() {

  }

  setSavedInput(savedInput: number) {
    this.savedInput = savedInput
  }

  getSavedInput(): number {
    return this.savedInput
  }

  clearSavedInput() {
    this.savedInput = null
  }

}
