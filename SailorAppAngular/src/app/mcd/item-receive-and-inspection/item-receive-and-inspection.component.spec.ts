import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReceiveAndInspectionComponent } from './item-receive-and-inspection.component';

describe('ItemReceiveAndInspectionComponent', () => {
  let component: ItemReceiveAndInspectionComponent;
  let fixture: ComponentFixture<ItemReceiveAndInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemReceiveAndInspectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemReceiveAndInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
