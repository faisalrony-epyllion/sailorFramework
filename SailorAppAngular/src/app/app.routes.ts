import { Routes } from '@angular/router';
 
import { BodyComponent } from './shared/layouts/body/body.component';
import { scmroutes } from './scm/scm.route';
import { businessPlanroutes } from './businessPlan/businessPlan.route';
 
 

 
      

  export const routes: Routes = [  
   
    { path: '', component: BodyComponent },
    ...scmroutes,...businessPlanroutes
  ];


    