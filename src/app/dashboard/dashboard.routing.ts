import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './index/index.component';

import { AboutComponent } from '../about';
import { ContactComponent } from '../contact';
import { ShopsComponent } from '../shops';
import { AddComponent } from '../add';

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
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'shops',
        component: ShopsComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
    ]
  }
])