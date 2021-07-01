import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDemoComponent } from './simple-demo/simple-demo.component';

import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple-demo/simple.reducer'
import { SimpleDemoRoutingModule } from './simple-demo-routing';

@NgModule({
  declarations: [
    SimpleDemoComponent
  ],
  imports: [
    StoreModule.forRoot({ message:  simpleReducer }),
    SimpleDemoRoutingModule,
    CommonModule
  ]
})
export class SimpleDemoModule { }
