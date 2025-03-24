import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorPageComponent } from './junior-page.component';

describe('JuniorPageComponent', () => {
  let component: JuniorPageComponent;
  let fixture: ComponentFixture<JuniorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuniorPageComponent]
    });
    fixture = TestBed.createComponent(JuniorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
