import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerDistributionComponent } from './designer-distribution.component';

describe('DesignerDistributionComponent', () => {
  let component: DesignerDistributionComponent;
  let fixture: ComponentFixture<DesignerDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignerDistributionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignerDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
