import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"
import { ChristmasLightsComponent } from "./christmas-lights.component"
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "", component: ChristmasLightsComponent }
        ])
    ]
}) export class ChristmasLightsModule { }