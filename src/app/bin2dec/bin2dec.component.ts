import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-bin2dec',
  templateUrl: './bin2dec.component.html',
  styleUrls: ['./bin2dec.component.scss']
})
export class Bin2decComponent implements OnInit {

  /**
   * @var binaryNumber will contain the binary number and the validators:
   * maxlength will be 8, only 0s and 1s and required
   */
  binaryNumber = new FormControl("", [Validators.required, Validators.maxLength(8), Validators.pattern(/^(0|1)[0-1]*(0|1)*$/)])
  /**
   * @var decimalNumber will contain the binary number converted to decimal
   */
  decimalNumber:number
  constructor() { }


  ngOnInit(): void {
  }

  /**
   * @method convertToDecimal recursive method to get a binary number and convert it to decimal, the last return is
   * if the power is equal to zero, meaning that is the last digit of the binary number
   * @param binaryNumber bynary number to convert
   * @param power current power of the 2 (current digit in the binary number)
   * @param divider number that verifies if theres a 1 in the current position of the binary number, dividing it
   */
  convertToDecimal(binaryNumber: number, power: number, divider: number) {
    if (power == 0) {
      return +binaryNumber
    } else {

      if (binaryNumber / divider >= 1) {
        return Math.pow(2, power) + this.convertToDecimal(binaryNumber - divider, power - 1, divider / 10)
      } else {
        return 0+this.convertToDecimal(binaryNumber, power - 1, divider / 10)
      }
    }
  }

  /**
   * @method verifyConvertion check if theres a valid binary number in the input, then triggers the convertion
   */
  verifyConvertion() {
    if(this.binaryNumber.valid){
      this.decimalNumber = this.convertToDecimal(this.binaryNumber.value,7,10000000)
    }
  }

}
