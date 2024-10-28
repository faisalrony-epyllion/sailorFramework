import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReturnApproveComponent } from './purchase-return-approve.component';

describe('PurchaseReturnApproveComponent', () => {
  let component: PurchaseReturnApproveComponent;
  let fixture: ComponentFixture<PurchaseReturnApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseReturnApproveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchaseReturnApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
