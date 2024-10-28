import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';
import { SampleOrderComponent } from './sample-order/sample-order.component';
import { PreCostingComponent } from './pre-costing/pre-costing.component';
import { PreCostingApprovalComponent } from './pre-costing-approval/pre-costing-approval.component';
import { DesignReviewComponent } from './design-review/design-review.component';
import { DesignReviewApprovalComponent } from './design-review-approval/design-review-approval.component';
import { TechPackComponent } from './tech-pack/tech-pack.component';
import { TechPackApprovalComponent } from './tech-pack-approval/tech-pack-approval.component';
import { FabricBookingReqComponent } from './fabric-booking-req/fabric-booking-req.component';
import { AccessoriesBookingReqComponent } from './accessories-booking-req/accessories-booking-req.component';
import { OpenPRApprovalComponent } from './open-prapproval/open-prapproval.component';

      

  export const designManagementroutes: Routes = [  
    {
      path: 'deesignManagement',
      component: MainLayoutComponent,
      children: [
        { path: 'sampleOrder', component: SampleOrderComponent },
        { path: 'precosting', component: PreCostingComponent },    
        { path: 'precostingApproval', component: PreCostingApprovalComponent },
        { path: 'designReview', component: DesignReviewComponent },
        { path: 'designReviewApproval', component: DesignReviewApprovalComponent },
        { path: 'techPack', component: TechPackComponent },
        { path: 'techPackapproval', component: TechPackApprovalComponent },
        { path: 'fabBookReq', component: FabricBookingReqComponent },
        { path: 'accBookReq', component: AccessoriesBookingReqComponent },
        { path: 'openPRApproval', component: OpenPRApprovalComponent },
      ]
    }
    
    
  ];


    