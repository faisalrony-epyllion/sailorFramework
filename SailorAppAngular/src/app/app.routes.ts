import { Routes } from '@angular/router';
 
import { BodyComponent } from './shared/layouts/body/body.component';
import { scmroutes } from './scm/scm.route';
import { userroutes } from './user/user.route';
import { businessPlanroutes } from './businessPlan/businessPlan.route';
import { rangePlanroutes } from './rangePlan/rangePlan.route';
import { planningAndAllocationroutes } from './planningAndAllocation/planningAndAllocation.route';
import { designManagementroutes } from './designManagement/designManagement.route';
import { merchandisingManagementroutes } from './merchandisingMgt/merchandisingMgt.route';
import { mcdroutes } from './mcd/mcd.route';
 
 

 
      

  export const routes: Routes = [  
   
     
    { path:'', loadChildren:()=> import('./user/user.route').then((m)=>m.userroutes)},
    { path:'scm', loadChildren:()=> import('./scm/scm.route').then((m)=>m.scmroutes)},
    { path:'businessPlan', loadChildren:()=> import('./businessPlan/businessPlan.route').then((m)=>m.businessPlanroutes)},
    { path:'rangePlan', loadChildren:()=> import('./rangePlan/rangePlan.route').then((m)=>m.rangePlanroutes)},
    { path:'planningAndAllocation', loadChildren:()=> import('./planningAndAllocation/planningAndAllocation.route').then((m)=>m.planningAndAllocationroutes)},
    { path:'deesignManagement', loadChildren:()=> import('./designManagement/designManagement.route').then((m)=>m.designManagementroutes)},
    { path:'merchandisingManagementroutes', loadChildren:()=> import('./merchandisingMgt/merchandisingMgt.route').then((m)=>m.merchandisingManagementroutes)},
    { path:'mcd', loadChildren:()=> import('./mcd/mcd.route').then((m)=>m.mcdroutes)},
    
    
    
 
    
    
  ];


    