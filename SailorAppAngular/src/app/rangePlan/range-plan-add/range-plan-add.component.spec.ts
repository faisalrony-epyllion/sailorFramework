import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangePlanAddComponent } from './range-plan-add.component';

describe('RangePlanAddComponent', () => {
  let component: RangePlanAddComponent;
  let fixture: ComponentFixture<RangePlanAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RangePlanAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RangePlanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
