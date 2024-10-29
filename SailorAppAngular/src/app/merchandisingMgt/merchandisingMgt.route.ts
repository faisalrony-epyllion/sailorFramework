import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';
import { TechPackAckComponent } from './tech-pack-ack/tech-pack-ack.component';
import { PreCostingReviewComponent } from './pre-costing-review/pre-costing-review.component';
import { FabricAlcReqComponent } from './fabric-alc-req/fabric-alc-req.component';
import { FabricPurchaseReqComponent } from './fabric-purchase-req/fabric-purchase-req.component';
import { AccesoriesPurchaseReqComponent } from './accesories-purchase-req/accesories-purchase-req.component';
import { PrApprovalComponent } from './pr-approval/pr-approval.component';
import { ServiceWorkOrderApproveComponent } from './service-work-order-approve/service-work-order-approve.component';
import { FabricAlcReqApproveComponent } from './fabric-alc-req-approve/fabric-alc-req-approve.component';



      

  export const merchandisingManagementroutes: Routes = [ 
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        { path: 'techpackArk', component: TechPackAckComponent  },
        { path: 'preCostingReview', component:PreCostingReviewComponent   },
        { path: 'fabricAlcReq', component:FabricAlcReqComponent   },
        { path: 'fabricPurchaseReq', component:FabricPurchaseReqComponent   },
        { path: 'accPurchaseReq', component:AccesoriesPurchaseReqComponent   },
        { path: 'prApproval', component:PrApprovalComponent   },
        { path: 'serviceWorkOrder', component:ServiceWorkOrderApproveComponent   },
        { path: 'serviceWorkOrderApprove', component:ServiceWorkOrderApproveComponent   },
        { path: 'fabricAlcReqApprove', component:FabricAlcReqApproveComponent   },
        
      ]
    } 
   
     
   
    
    
  ];


    