import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FooterOnlyLayoutComponent } from '../shared/layouts/footer-only-layout/footer-only-layout.component';
      

  export const userroutes: Routes = [  
    {
      path: '',component: FooterOnlyLayoutComponent,
      children: [{ path: '', component: LoginComponent },]
    }
    
    
  ];


    