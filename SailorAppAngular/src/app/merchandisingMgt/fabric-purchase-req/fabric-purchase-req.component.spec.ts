import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricPurchaseReqComponent } from './fabric-purchase-req.component';

describe('FabricPurchaseReqComponent', () => {
  let component: FabricPurchaseReqComponent;
  let fixture: ComponentFixture<FabricPurchaseReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricPurchaseReqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FabricPurchaseReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
