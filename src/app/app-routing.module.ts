import { HomeComponent } from './home/home.component';
import { BorderRadiusPreviewerComponent } from './border-radius-previewer/border-radius-previewer.component';
import { Bin2decComponent } from './bin2dec/bin2dec.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'bin2dec', component: Bin2decComponent },
  { path: 'border-radius-previewer', component: BorderRadiusPreviewerComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
