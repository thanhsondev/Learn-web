import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2Component } from './ex2.component';

describe('Ex2Component', () => {
  let component: Ex2Component;
  let fixture: ComponentFixture<Ex2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex2Component]
    });
    fixture = TestBed.createComponent(Ex2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
