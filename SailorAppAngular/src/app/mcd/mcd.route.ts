import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';
import { ItemReceiveAndInspectionComponent } from './item-receive-and-inspection/item-receive-and-inspection.component';
import { GoodsReceiveNoteComponent } from './goods-receive-note/goods-receive-note.component';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { PurchaseReturnApproveComponent } from './purchase-return-approve/purchase-return-approve.component';
import { FabricReqIssueComponent } from './fabric-req-issue/fabric-req-issue.component';
import { FabricReqIssueApprovalComponent } from './fabric-req-issue-approval/fabric-req-issue-approval.component';
import { AccessoriesReqIssueComponent } from './accessories-req-issue/accessories-req-issue.component';
import { AccessoriesReqIssueApprovalComponent } from './accessories-req-issue-approval/accessories-req-issue-approval.component';
import { FloorReturnAckComponent } from './floor-return-ack/floor-return-ack.component';



      

  export const mcdroutes: Routes = [ 
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        { path: 'itemReceiveAndInspection', component: ItemReceiveAndInspectionComponent  },
        { path: 'goodsReceiveNote', component:GoodsReceiveNoteComponent   },
        { path: 'purchaseReturn', component:PurchaseReturnComponent   },
        { path: 'purchaseReturnApprove', component:PurchaseReturnApproveComponent   },
        { path: 'fabricReqIssue', component:FabricReqIssueComponent   },
        { path: 'fabricReqIssueApproval', component:FabricReqIssueApprovalComponent   },
        { path: 'accReqIssue', component:AccessoriesReqIssueComponent   },
        { path: 'accReqIssueApprove', component:AccessoriesReqIssueApprovalComponent   },
        { path: 'floorReturnAck', component:FloorReturnAckComponent   },
       
      ]
    } 
   

    
  ];


    