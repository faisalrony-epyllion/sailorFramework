import { Routes } from '@angular/router';

 

 
      

  export const routes: Routes = [  
   
     
    { path:'', loadChildren:()=> import('./user/user.route').then((m)=>m.userroutes)},
    { path:'scm', loadChildren:()=> import('./scm/scm.route').then((m)=>m.scmroutes)},
    { path:'businessPlan', loadChildren:()=> import('./businessPlan/businessPlan.route').then((m)=>m.businessPlanroutes)},
    { path:'rangePlan', loadChildren:()=> import('./rangePlan/rangePlan.route').then((m)=>m.rangePlanroutes)},
    { path:'planningAndAllocation', loadChildren:()=> import('./planningAndAllocation/planningAndAllocation.route').then((m)=>m.planningAndAllocationroutes)},
    { path:'deesignManagement', loadChildren:()=> import('./designManagement/designManagement.route').then((m)=>m.designManagementroutes)},
    { path:'merchandisingMgt', loadChildren:()=> import('./merchandisingMgt/merchandisingMgt.route').then((m)=>m.merchandisingManagementroutes)},
    { path:'mcd', loadChildren:()=> import('./mcd/mcd.route').then((m)=>m.mcdroutes)},
    
    
    
 
    
    
  ];


    