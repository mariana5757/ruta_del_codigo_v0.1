import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFlowComponent } from './git-flow.component';

describe('GitFlowComponent', () => {
  let component: GitFlowComponent;
  let fixture: ComponentFixture<GitFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitFlowComponent]
    });
    fixture = TestBed.createComponent(GitFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
