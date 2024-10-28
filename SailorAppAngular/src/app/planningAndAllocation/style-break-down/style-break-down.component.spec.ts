import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBreakDownComponent } from './style-break-down.component';

describe('StyleBreakDownComponent', () => {
  let component: StyleBreakDownComponent;
  let fixture: ComponentFixture<StyleBreakDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleBreakDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StyleBreakDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
