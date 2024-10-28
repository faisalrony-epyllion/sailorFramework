import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPoApprovalComponent } from './open-po-approval.component';

describe('OpenPoApprovalComponent', () => {
  let component: OpenPoApprovalComponent;
  let fixture: ComponentFixture<OpenPoApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenPoApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenPoApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
