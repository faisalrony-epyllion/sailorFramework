import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPackApprovalComponent } from './tech-pack-approval.component';

describe('TechPackApprovalComponent', () => {
  let component: TechPackApprovalComponent;
  let fixture: ComponentFixture<TechPackApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechPackApprovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechPackApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
