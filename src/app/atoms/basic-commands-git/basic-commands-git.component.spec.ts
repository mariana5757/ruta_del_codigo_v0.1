import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCommandsGitComponent } from './basic-commands-git.component';

describe('BasicCommandsGitComponent', () => {
  let component: BasicCommandsGitComponent;
  let fixture: ComponentFixture<BasicCommandsGitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicCommandsGitComponent]
    });
    fixture = TestBed.createComponent(BasicCommandsGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
