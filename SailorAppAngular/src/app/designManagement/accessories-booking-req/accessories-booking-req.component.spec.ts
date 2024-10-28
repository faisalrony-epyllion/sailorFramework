import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesBookingReqComponent } from './accessories-booking-req.component';

describe('AccessoriesBookingReqComponent', () => {
  let component: AccessoriesBookingReqComponent;
  let fixture: ComponentFixture<AccessoriesBookingReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesBookingReqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessoriesBookingReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
