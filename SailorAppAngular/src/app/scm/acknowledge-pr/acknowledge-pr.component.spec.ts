import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgePRComponent } from './acknowledge-pr.component';

describe('AcknowledgePRComponent', () => {
  let component: AcknowledgePRComponent;
  let fixture: ComponentFixture<AcknowledgePRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcknowledgePRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcknowledgePRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
