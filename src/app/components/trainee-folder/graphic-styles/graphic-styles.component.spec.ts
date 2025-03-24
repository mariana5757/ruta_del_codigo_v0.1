import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicStylesComponent } from './graphic-styles.component';

describe('GraphicStylesComponent', () => {
  let component: GraphicStylesComponent;
  let fixture: ComponentFixture<GraphicStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicStylesComponent]
    });
    fixture = TestBed.createComponent(GraphicStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
