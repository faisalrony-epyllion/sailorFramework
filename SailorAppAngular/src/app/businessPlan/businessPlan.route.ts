import { Routes } from '@angular/router';
import { BusinessPlanAddComponent } from './business-plan-add/business-plan-add.component';
import { BusinessPlanApprovalComponent } from './business-plan-approval/business-plan-approval.component';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';

      

  export const businessPlanroutes: Routes = [  
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        { path: 'businessPalnAdd', component:  BusinessPlanAddComponent },
        { path: 'businessPalnApproval', component:  BusinessPlanApprovalComponent },
      ]
    }
   
     
   
    
    
  ];


    