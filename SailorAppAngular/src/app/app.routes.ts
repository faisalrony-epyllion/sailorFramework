import { Routes } from '@angular/router';
 
import { BodyComponent } from './shared/layouts/body/body.component';
import { scmroutes } from './scm/scm.route';
import { userroutes } from './user/user.route';
import { businessPlanroutes } from './businessPlan/businessPlan.route';
import { rangePlanroutes } from './rangePlan/rangePlan.route';
import { planningAndAllocationroutes } from './planningAndAllocation/planningAndAllocation.route';
 
 

 
      

  export const routes: Routes = [  
   
    ...userroutes,
    ...scmroutes
  ];


    