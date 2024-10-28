import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSubmissionComponent } from './bill-submission.component';

describe('BillSubmissionComponent', () => {
  let component: BillSubmissionComponent;
  let fixture: ComponentFixture<BillSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillSubmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
