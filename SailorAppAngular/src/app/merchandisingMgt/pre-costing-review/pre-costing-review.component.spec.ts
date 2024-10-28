import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCostingReviewComponent } from './pre-costing-review.component';

describe('PreCostingReviewComponent', () => {
  let component: PreCostingReviewComponent;
  let fixture: ComponentFixture<PreCostingReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreCostingReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreCostingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
