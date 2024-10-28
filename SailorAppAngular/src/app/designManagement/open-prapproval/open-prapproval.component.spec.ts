import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPRApprovalComponent } from './open-prapproval.component';

describe('OpenPRApprovalComponent', () => {
  let component: OpenPRApprovalComponent;
  let fixture: ComponentFixture<OpenPRApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenPRApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenPRApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
