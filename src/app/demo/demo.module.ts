import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo/demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    NgbTooltipModule,
    
    ReactiveFormsModule,
    DemoRoutingModule
  ],
  declarations: [DemoComponent]
})
export class DemoModule { }
