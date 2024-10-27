import { Routes } from '@angular/router';
 
import { BodyComponent } from './shared/layouts/body/body.component';
import { FabricComponent } from './scm/fabric/fabric.component';
import { AccessoriesComponent } from './scm/accessories/accessories.component';
 

 
      

  export const routes: Routes = [  
   
    { path: '', component: BodyComponent },
    { path: 'fabric', component: FabricComponent },
    { path: 'accessories', component: AccessoriesComponent },
  ];


    