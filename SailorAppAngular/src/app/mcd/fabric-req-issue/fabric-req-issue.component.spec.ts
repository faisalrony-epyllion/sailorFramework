import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricReqIssueComponent } from './fabric-req-issue.component';

describe('FabricReqIssueComponent', () => {
  let component: FabricReqIssueComponent;
  let fixture: ComponentFixture<FabricReqIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricReqIssueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FabricReqIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
