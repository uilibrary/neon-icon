import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { ToastrModule } from 'ngx-toastr';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo/demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { IconFontComponent } from './icon-font/icon-font.component';
import { HeaderComponent } from './header/header.component';
import { DemoLayoutComponent } from './demo-layout/demo-layout.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  imports: [
    CommonModule,
    NgbTooltipModule,
    ClipboardModule,
    NgbAlertModule,
    ReactiveFormsModule,
    DemoRoutingModule
  ],
  declarations: [DemoComponent, IconFontComponent, HeaderComponent, DemoLayoutComponent, FooterComponent, LoaderComponent]
})
export class DemoModule { }
