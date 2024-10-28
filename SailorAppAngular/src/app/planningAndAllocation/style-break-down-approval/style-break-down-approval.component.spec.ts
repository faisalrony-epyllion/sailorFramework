import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBreakDownApprovalComponent } from './style-break-down-approval.component';

describe('StyleBreakDownApprovalComponent', () => {
  let component: StyleBreakDownApprovalComponent;
  let fixture: ComponentFixture<StyleBreakDownApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleBreakDownApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleBreakDownApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
