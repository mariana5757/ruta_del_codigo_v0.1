import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructureAngularComponent } from './estructure-angular.component';

describe('EstructureAngularComponent', () => {
  let component: EstructureAngularComponent;
  let fixture: ComponentFixture<EstructureAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstructureAngularComponent]
    });
    fixture = TestBed.createComponent(EstructureAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
