import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlanApprovalComponent } from './business-plan-approval.component';

describe('BusinessPlanApprovalComponent', () => {
  let component: BusinessPlanApprovalComponent;
  let fixture: ComponentFixture<BusinessPlanApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPlanApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessPlanApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
