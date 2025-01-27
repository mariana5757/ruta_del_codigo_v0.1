import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialConfigGitComponent } from './initial-config-git.component';

describe('InitialConfigGitComponent', () => {
  let component: InitialConfigGitComponent;
  let fixture: ComponentFixture<InitialConfigGitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialConfigGitComponent]
    });
    fixture = TestBed.createComponent(InitialConfigGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
