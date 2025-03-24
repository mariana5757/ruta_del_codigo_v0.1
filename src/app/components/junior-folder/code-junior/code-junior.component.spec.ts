import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeJuniorComponent } from './code-junior.component';

describe('CodeJuniorComponent', () => {
  let component: CodeJuniorComponent;
  let fixture: ComponentFixture<CodeJuniorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeJuniorComponent]
    });
    fixture = TestBed.createComponent(CodeJuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
