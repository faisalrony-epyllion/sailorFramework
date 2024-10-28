import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesReqIssueApprovalComponent } from './accessories-req-issue-approval.component';

describe('AccessoriesReqIssueApprovalComponent', () => {
  let component: AccessoriesReqIssueApprovalComponent;
  let fixture: ComponentFixture<AccessoriesReqIssueApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesReqIssueApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessoriesReqIssueApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
