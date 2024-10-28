import { Routes } from '@angular/router';
import { BusinessPlanAddComponent } from './business-plan-add/business-plan-add.component';
import { BusinessPlanApprovalComponent } from './business-plan-approval/business-plan-approval.component';

      

  export const businessPlanroutes: Routes = [  
   
     
    { path: 'businessPalnAdd', component:  BusinessPlanAddComponent },
    { path: 'businessPalnApproval', component:  BusinessPlanApprovalComponent },
    
    
  ];


    