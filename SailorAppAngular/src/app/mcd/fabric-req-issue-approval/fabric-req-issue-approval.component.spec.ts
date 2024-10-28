import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricReqIssueApprovalComponent } from './fabric-req-issue-approval.component';

describe('FabricReqIssueApprovalComponent', () => {
  let component: FabricReqIssueApprovalComponent;
  let fixture: ComponentFixture<FabricReqIssueApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricReqIssueApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FabricReqIssueApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
