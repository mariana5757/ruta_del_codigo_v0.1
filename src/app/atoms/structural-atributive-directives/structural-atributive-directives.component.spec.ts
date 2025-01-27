import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralAtributiveDirectivesComponent } from './structural-atributive-directives.component';

describe('StructuralAtributiveDirectivesComponent', () => {
  let component: StructuralAtributiveDirectivesComponent;
  let fixture: ComponentFixture<StructuralAtributiveDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructuralAtributiveDirectivesComponent]
    });
    fixture = TestBed.createComponent(StructuralAtributiveDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
