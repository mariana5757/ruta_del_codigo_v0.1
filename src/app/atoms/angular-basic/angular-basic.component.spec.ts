import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBasicComponent } from './angular-basic.component';

describe('AngularBasicComponent', () => {
  let component: AngularBasicComponent;
  let fixture: ComponentFixture<AngularBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularBasicComponent]
    });
    fixture = TestBed.createComponent(AngularBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
