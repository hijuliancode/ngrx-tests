import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleDemoComponent } from './simple-demo/simple-demo.component';


const routes: Routes = [
  {
    path: '',
    component: SimpleDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleDemoRoutingModule { }