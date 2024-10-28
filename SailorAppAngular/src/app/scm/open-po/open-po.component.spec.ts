import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPOComponent } from './open-po.component';

describe('OpenPOComponent', () => {
  let component: OpenPOComponent;
  let fixture: ComponentFixture<OpenPOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenPOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
