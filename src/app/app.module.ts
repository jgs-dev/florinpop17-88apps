import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { Bin2decComponent } from './bin2dec/bin2dec.component';
import { BorderRadiusPreviewerComponent } from './border-radius-previewer/border-radius-previewer.component';

@NgModule({
  declarations: [
    AppComponent,
    Bin2decComponent,
    BorderRadiusPreviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
