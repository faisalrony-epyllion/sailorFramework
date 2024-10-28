import { Routes } from '@angular/router';
import { RangePlanAddComponent } from './range-plan-add/range-plan-add.component';
import { RangePlanApprovalComponent } from './range-plan-approval/range-plan-approval.component';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';

      

  export const rangePlanroutes: Routes = [  
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        { path: 'rangePalnAdd', component:  RangePlanAddComponent },
        { path: 'rangePalnApproval', component:  RangePlanApprovalComponent },
      ]
    }
   
     
   
    
    
  ];


    