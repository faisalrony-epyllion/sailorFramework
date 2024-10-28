import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPlanAddComponent } from './business-plan-add.component';

describe('BusinessPlanAddComponent', () => {
  let component: BusinessPlanAddComponent;
  let fixture: ComponentFixture<BusinessPlanAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPlanAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessPlanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
