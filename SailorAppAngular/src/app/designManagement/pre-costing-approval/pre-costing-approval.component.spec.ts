import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCostingApprovalComponent } from './pre-costing-approval.component';

describe('PreCostingApprovalComponent', () => {
  let component: PreCostingApprovalComponent;
  let fixture: ComponentFixture<PreCostingApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreCostingApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreCostingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
