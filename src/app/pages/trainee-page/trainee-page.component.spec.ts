import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineePageComponent } from './trainee-page.component';

describe('TraineePageComponent', () => {
  let component: TraineePageComponent;
  let fixture: ComponentFixture<TraineePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraineePageComponent]
    });
    fixture = TestBed.createComponent(TraineePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
