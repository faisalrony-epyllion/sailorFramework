import { Routes } from '@angular/router';
import { FabricComponent } from './fabric/fabric.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { OpenPOComponent } from './open-po/open-po.component';
import { AcknowledgePRComponent } from './acknowledge-pr/acknowledge-pr.component';
import { PoApprovalComponent } from './po-approval/po-approval.component';
import { OpenPoApprovalComponent } from './open-po-approval/open-po-approval.component';
import { BillSubmissionComponent } from './bill-submission/bill-submission.component';
import { BillApprovalComponent } from './bill-approval/bill-approval.component';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';
      

  export const scmroutes: Routes = [  
    {
      path: 'scm',
      component: MainLayoutComponent,
      children: [
        { path: 'ackPR', component: AcknowledgePRComponent },
        { path: 'fabric', component: FabricComponent },    
        { path: 'accessories', component: AccessoriesComponent },
        { path: 'poApproval', component: PoApprovalComponent },
        { path: 'openPo', component: OpenPOComponent },
        { path: 'openPoApproval', component: OpenPoApprovalComponent },
        { path: 'billSubmission', component: BillSubmissionComponent },
        { path: 'billApproval', component: BillApprovalComponent },
      ]
    }
    
    
  ];


    