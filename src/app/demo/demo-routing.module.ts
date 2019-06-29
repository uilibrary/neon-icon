import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { IconFontComponent } from './icon-font/icon-font.component';
import { DemoLayoutComponent } from './demo-layout/demo-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DemoLayoutComponent,
    children: [
      {
        path: '',
        component: DemoComponent
      },
      {
        path: 'icon-font',
        component: IconFontComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
