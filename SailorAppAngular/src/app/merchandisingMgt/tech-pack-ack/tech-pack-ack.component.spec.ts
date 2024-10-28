import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechPackAckComponent } from './tech-pack-ack.component';

describe('TechPackAckComponent', () => {
  let component: TechPackAckComponent;
  let fixture: ComponentFixture<TechPackAckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechPackAckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechPackAckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
