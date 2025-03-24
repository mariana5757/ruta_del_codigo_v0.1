import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLogicComponent } from './programming-logic.component';

describe('ProgrammingLogicComponent', () => {
  let component: ProgrammingLogicComponent;
  let fixture: ComponentFixture<ProgrammingLogicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammingLogicComponent]
    });
    fixture = TestBed.createComponent(ProgrammingLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
