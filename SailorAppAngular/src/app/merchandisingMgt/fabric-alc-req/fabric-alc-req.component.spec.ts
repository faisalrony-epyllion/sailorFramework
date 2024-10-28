import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricAlcReqComponent } from './fabric-alc-req.component';

describe('FabricAlcReqComponent', () => {
  let component: FabricAlcReqComponent;
  let fixture: ComponentFixture<FabricAlcReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricAlcReqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FabricAlcReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
