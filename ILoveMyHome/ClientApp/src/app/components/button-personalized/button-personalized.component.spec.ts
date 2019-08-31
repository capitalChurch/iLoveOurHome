import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPersonalizedComponent } from './button-personalized.component';

describe('ButtonPersonalizedComponent', () => {
  let component: ButtonPersonalizedComponent;
  let fixture: ComponentFixture<ButtonPersonalizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPersonalizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPersonalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
