import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangePlanApprovalComponent } from './range-plan-approval.component';

describe('RangePlanApprovalComponent', () => {
  let component: RangePlanApprovalComponent;
  let fixture: ComponentFixture<RangePlanApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangePlanApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RangePlanApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
