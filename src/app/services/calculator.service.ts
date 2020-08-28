import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  pileOfInstructions: any[] = []


  constructor() { }

  operate() {
    if (this.pileOfInstructions.length > 3) {
      let aux = [...this.pileOfInstructions]
      let lastOperation = aux.pop()
      let lastNumber = aux.pop()
      switch (aux.pop()) {
        case "+":
          lastNumber = (lastNumber + aux.pop())
          break
        case "-":
          lastNumber = (aux.pop() - lastNumber)
          break
        case "*":
          lastNumber = (aux.pop() * lastNumber)
          break
        case "/":
          lastNumber = (aux.pop() / lastNumber)
          break
      }
      if (("" + lastNumber).length > 8) {
        this.pileOfInstructions = []
        return "ERR"
      }
      this.pileOfInstructions = [lastNumber, lastOperation]
      return lastNumber

    }
  }

  addInstruction(number: string, instruction: string) {
    if (number == "") {
      this.pileOfInstructions.push(0)
    } else {
      this.pileOfInstructions.push(parseFloat(number))
    }
    this.pileOfInstructions.push(instruction)
    return this.operate()
  }

  lastInstruction() {
    return this.pileOfInstructions.slice(this.pileOfInstructions.length - 1)
  }

  clearAllInstructions() {
    this.pileOfInstructions = []
  }
  getLastNumber() {
    return this.pileOfInstructions[this.pileOfInstructions.length - 2]
  }
}
