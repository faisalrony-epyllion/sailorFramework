import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesReqIssueComponent } from './accessories-req-issue.component';

describe('AccessoriesReqIssueComponent', () => {
  let component: AccessoriesReqIssueComponent;
  let fixture: ComponentFixture<AccessoriesReqIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesReqIssueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessoriesReqIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
