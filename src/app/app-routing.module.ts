import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './shared/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/#',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [LayoutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
