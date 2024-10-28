import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPackComponent } from './tech-pack.component';

describe('TechPackComponent', () => {
  let component: TechPackComponent;
  let fixture: ComponentFixture<TechPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechPackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
