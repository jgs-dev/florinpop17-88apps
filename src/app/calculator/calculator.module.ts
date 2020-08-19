import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { CalculatorComponent } from "./calculator.component"
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "", component: CalculatorComponent }
        ])
    ]
}) export class CalculatorModule { }