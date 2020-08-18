import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"
import { Bin2decComponent } from "./bin2dec.component"
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "", component: Bin2decComponent }
        ])
    ]
}) export class Bin2decModule { }