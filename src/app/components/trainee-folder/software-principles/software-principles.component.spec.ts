import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwarePrinciplesComponent } from './software-principles.component';

describe('SoftwarePrinciplesComponent', () => {
  let component: SoftwarePrinciplesComponent;
  let fixture: ComponentFixture<SoftwarePrinciplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwarePrinciplesComponent]
    });
    fixture = TestBed.createComponent(SoftwarePrinciplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
