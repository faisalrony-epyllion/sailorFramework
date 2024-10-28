import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWorkOrderApproveComponent } from './service-work-order-approve.component';

describe('ServiceWorkOrderApproveComponent', () => {
  let component: ServiceWorkOrderApproveComponent;
  let fixture: ComponentFixture<ServiceWorkOrderApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceWorkOrderApproveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceWorkOrderApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
