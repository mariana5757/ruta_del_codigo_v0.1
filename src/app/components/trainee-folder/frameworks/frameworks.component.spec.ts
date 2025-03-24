import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksComponent } from './frameworks.component';

describe('FrameworksComponent', () => {
  let component: FrameworksComponent;
  let fixture: ComponentFixture<FrameworksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameworksComponent]
    });
    fixture = TestBed.createComponent(FrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
