import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCostingComponent } from './pre-costing.component';

describe('PreCostingComponent', () => {
  let component: PreCostingComponent;
  let fixture: ComponentFixture<PreCostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreCostingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
