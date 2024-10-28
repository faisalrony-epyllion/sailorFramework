import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriesPurchaseReqComponent } from './accesories-purchase-req.component';

describe('AccesoriesPurchaseReqComponent', () => {
  let component: AccesoriesPurchaseReqComponent;
  let fixture: ComponentFixture<AccesoriesPurchaseReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesoriesPurchaseReqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccesoriesPurchaseReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
