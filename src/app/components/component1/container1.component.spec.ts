import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Container1Component } from './container1.component';

describe('Container1Component', () => {
  let component: Container1Component;
  let fixture: ComponentFixture<Container1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Container1Component]
    });
    fixture = TestBed.createComponent(Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
