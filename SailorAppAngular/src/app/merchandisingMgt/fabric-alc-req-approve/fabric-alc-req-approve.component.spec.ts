import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricAlcReqApproveComponent } from './fabric-alc-req-approve.component';

describe('FabricAlcReqApproveComponent', () => {
  let component: FabricAlcReqApproveComponent;
  let fixture: ComponentFixture<FabricAlcReqApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricAlcReqApproveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FabricAlcReqApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
