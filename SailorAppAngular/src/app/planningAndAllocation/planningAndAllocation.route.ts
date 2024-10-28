import { Routes } from '@angular/router';
import { StyleBreakDownComponent } from './style-break-down/style-break-down.component';
import { StyleBreakDownApprovalComponent } from './style-break-down-approval/style-break-down-approval.component';
import { DesignerDistributionComponent } from './designer-distribution/designer-distribution.component';


      

  export const planningAndAllocationroutes: Routes = [  
   
     
    { path: 'styleBreakdown', component: StyleBreakDownComponent  },
    { path: 'styleBreakApproval', component:StyleBreakDownApprovalComponent   },
    { path: 'designerDistribution', component:DesignerDistributionComponent   },
    
    
  ];


    