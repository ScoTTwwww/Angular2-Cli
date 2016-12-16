import { NgModule } from '@angular/core';

import { DashboardRouting } from './dashboard.routing';
import { AddModule } from '../add';

import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar';

import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    DashboardRouting,
    AddModule,
  ],
  exports: [

  ],
  declarations: [
    DashboardComponent,
    NavbarComponent,
    IndexComponent,
    FooterComponent,
  ]
})
export class DashboardModule { }
