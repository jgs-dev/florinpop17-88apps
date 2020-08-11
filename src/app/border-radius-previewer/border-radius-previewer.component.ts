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
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0
  }

  /**
   * @var bordersForm form validator of the border inputs and values
   */
  bordersForm = this.formBuilder.group({
    borderRadiusTopLeft: ["", [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+[0-9]*$/)]],
    borderRadiusTopRight: ["", [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+[0-9]*$/)]],
    borderRadiusBottomRight: ["", [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+[0-9]*$/)]],
    borderRadiusBottomLeft: ["", [Validators.required, Validators.min(0), Validators.pattern(/^[0-9]+[0-9]*$/)]]
  })

  ngOnInit(): void { }

  test() {
    console.log(this.borderRadius)
  }

  getBorderRadius(): object {
    return {"border-radius":this.borderRadius.topLeft + "px " + this.borderRadius.topRight + "px " + this.borderRadius.bottomRight + "px " + this.borderRadius.bottomLeft + "px"}
  }

  setBorderTopLeftRadius() {
    if (this.bordersForm.get("borderRadiusTopLeft").valid) {
      this.borderRadius.topLeft = this.bordersForm.get("borderRadiusTopLeft").value
    }
  }

  setBorderTopRightRadius() {
    if (this.bordersForm.get("borderRadiusTopRight").valid) {
      this.borderRadius.topRight = this.bordersForm.get("borderRadiusTopRight").value
    }
  }

  setBorderBottomLeftRadius() {
    if (this.bordersForm.get("borderRadiusBottomLeft").valid) {
      this.borderRadius.bottomLeft = this.bordersForm.get("borderRadiusBottomLeft").value
    }
  }

  setBorderBottomRightRadius() {
    if (this.bordersForm.get("borderRadiusBottomRight").valid) {
      this.borderRadius.bottomRight = this.bordersForm.get("borderRadiusBottomRight").value
    }
  }



}
