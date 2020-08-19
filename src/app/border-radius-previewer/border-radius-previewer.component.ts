import { Component, OnInit } from '@angular/core';
import { FormGroup, Form, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-border-radius-previewer',
  templateUrl: './border-radius-previewer.component.html',
  styleUrls: ['./border-radius-previewer.component.scss']
})
export class BorderRadiusPreviewerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  /**
   * @var borderRadius object that has the border-radius variables
   */
  borderRadius = {
    topLeft: 150,
    topRight: 150,
    bottomLeft: 150,
    bottomRight: 150
  }

  /**
   * @var bordersForm form validator of the border inputs and values
   */

   // not needed since the form changed from input numbers for sliders
  bordersForm = this.formBuilder.group({
    borderRadiusTopLeft: ["", [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+[0-9]*$/)]],
    borderRadiusTopRight: ["", [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+[0-9]*$/)]],
    borderRadiusBottomRight: ["", [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+[0-9]*$/)]],
    borderRadiusBottomLeft: ["", [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+[0-9]*$/)]]
  })

  ngOnInit(): void { }


  /**
   * @method getBorderRadius returns an object that contains the css equivalent of border-radius, called for the ngStyle directive
   */
  getBorderRadius(): object {
    return { "border-radius": `${this.borderRadius.topLeft}px ${this.borderRadius.topRight}px ${this.borderRadius.bottomRight}px ${this.borderRadius.bottomLeft}px` }
  }


  /**
   * @method setBorderBottomLeftRadius validates that the input is valid and set the value of top left
   */
  setBorderTopLeftRadius() {
    if (this.bordersForm.get("borderRadiusTopLeft").valid) {
      this.borderRadius.topLeft = this.bordersForm.get("borderRadiusTopLeft").value
    }
  }

  /**
   *  @method setBorderTopRightRadius validates that the input is valid and set the value of top right
   */
  setBorderTopRightRadius() {
    if (this.bordersForm.get("borderRadiusTopRight").valid) {
      this.borderRadius.topRight = this.bordersForm.get("borderRadiusTopRight").value
    }
  }
/**
 * @method setBorderBottomLeftRadius validates that the input is valid and set the value of bottom left
 */
  setBorderBottomLeftRadius() {
    if (this.bordersForm.get("borderRadiusBottomLeft").valid) {
      this.borderRadius.bottomLeft = this.bordersForm.get("borderRadiusBottomLeft").value
    }
  }

  /**
   * @method setBorderBottomRightRadius validates that the input is valid and set the value of bottom right
   */
  setBorderBottomRightRadius() {
    if (this.bordersForm.get("borderRadiusBottomRight").valid) {
      this.borderRadius.bottomRight = this.bordersForm.get("borderRadiusBottomRight").value
    }
  }

  /**
   *  @method copyToClipboard returns the string that contains the css style for border-radius, called for the button copy to clipboard
   */
  copyToClipboard(): string {
    return "border-radius:" + this.getBorderRadius()["border-radius"]
  }

}
