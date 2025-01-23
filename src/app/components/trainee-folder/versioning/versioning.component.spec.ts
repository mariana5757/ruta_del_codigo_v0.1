import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersioningComponent } from './versioning.component';

describe('VersioningComponent', () => {
  let component: VersioningComponent;
  let fixture: ComponentFixture<VersioningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersioningComponent]
    });
    fixture = TestBed.createComponent(VersioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
