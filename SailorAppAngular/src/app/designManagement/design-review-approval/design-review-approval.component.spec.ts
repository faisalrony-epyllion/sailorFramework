import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignReviewApprovalComponent } from './design-review-approval.component';

describe('DesignReviewApprovalComponent', () => {
  let component: DesignReviewApprovalComponent;
  let fixture: ComponentFixture<DesignReviewApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignReviewApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignReviewApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
