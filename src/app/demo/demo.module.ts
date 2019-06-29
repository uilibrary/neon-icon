import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo/demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { IconFontComponent } from './icon-font/icon-font.component';
import { HeaderComponent } from './header/header.component';
import { DemoLayoutComponent } from './demo-layout/demo-layout.component';



@NgModule({
  imports: [
    CommonModule,
    NgbTooltipModule,
    
    ReactiveFormsModule,
    DemoRoutingModule
  ],
  declarations: [DemoComponent, IconFontComponent, HeaderComponent, DemoLayoutComponent]
})
export class DemoModule { }
