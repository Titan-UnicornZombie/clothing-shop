import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PursesComponent } from './purses.component';

describe('PursesComponent', () => {
  let component: PursesComponent;
  let fixture: ComponentFixture<PursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PursesComponent]
    });
    fixture = TestBed.createComponent(PursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
