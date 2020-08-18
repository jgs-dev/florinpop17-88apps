import { HomeComponent } from './home/home.component';
import { BorderRadiusPreviewerComponent } from './border-radius-previewer/border-radius-previewer.component';
import { Bin2decComponent } from './bin2dec/bin2dec.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
  { path: 'bin2dec', loadChildren: () => import("./bin2dec/bin2dec.module").then(m => m.Bin2decModule) },
  { path: 'border-radius-previewer', loadChildren: () => import("./border-radius-previewer/border-radius-previewer.module").then(m => m.BorderRadiusPreviewerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
