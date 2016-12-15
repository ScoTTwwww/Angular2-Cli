import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';

import { AboutComponent } from '../about';

export const DashboardRouting = RouterModule.forChild([
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ]
  }
])