import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorReturnAckComponent } from './floor-return-ack.component';

describe('FloorReturnAckComponent', () => {
  let component: FloorReturnAckComponent;
  let fixture: ComponentFixture<FloorReturnAckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorReturnAckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloorReturnAckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
