import { NgModule } from '@angular/core';

import { DashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar';

import { IndexComponent } from './index/index.component';


@NgModule({
  imports: [
    DashboardRouting,
  ],
  exports: [

  ],
  declarations: [
    DashboardComponent,
    NavbarComponent,
    IndexComponent
  ]
})
export class DashboardModule { }
