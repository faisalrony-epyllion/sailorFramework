import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricBookingReqComponent } from './fabric-booking-req.component';

describe('FabricBookingReqComponent', () => {
  let component: FabricBookingReqComponent;
  let fixture: ComponentFixture<FabricBookingReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricBookingReqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FabricBookingReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
