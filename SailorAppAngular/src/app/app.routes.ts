import { Routes } from '@angular/router';
 
import { BodyComponent } from './shared/layouts/body/body.component';
import { scmroutes } from './scm/scm.route';
 
 

 
      

  export const routes: Routes = [  
   
    { path: '', component: BodyComponent },
    ...scmroutes
  ];


    