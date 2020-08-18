
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { BorderRadiusPreviewerComponent } from './border-radius-previewer.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "", component: BorderRadiusPreviewerComponent }
        ])
    ]
}) export class BorderRadiusPreviewerModule { }