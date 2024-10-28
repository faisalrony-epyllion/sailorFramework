import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWorkOrderComponent } from './service-work-order.component';

describe('ServiceWorkOrderComponent', () => {
  let component: ServiceWorkOrderComponent;
  let fixture: ComponentFixture<ServiceWorkOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceWorkOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
