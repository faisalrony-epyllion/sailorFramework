import { Routes } from '@angular/router';

import { scmroutes } from './scm/scm.route';
import { userroutes } from './user/user.route';
import { businessPlanroutes } from './businessPlan/businessPlan.route';
import { rangePlanroutes } from './rangePlan/rangePlan.route';
import { planningAndAllocationroutes } from './planningAndAllocation/planningAndAllocation.route';
import { designManagementroutes } from './designManagement/designManagement.route';
import { merchandisingManagementroutes } from './merchandisingMgt/merchandisingMgt.route';
 
 

 
      

  export const routes: Routes = [  
   
    ...userroutes,
    ...businessPlanroutes,
    ...rangePlanroutes,
    ...planningAndAllocationroutes,
    ...designManagementroutes,
    ...merchandisingManagementroutes,
    ...scmroutes,
  ];


    