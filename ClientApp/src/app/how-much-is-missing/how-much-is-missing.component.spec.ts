import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowMuchIsMissingComponent } from './how-much-is-missing.component';

describe('HowMuchIsMissingComponent', () => {
  let component: HowMuchIsMissingComponent;
  let fixture: ComponentFixture<HowMuchIsMissingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowMuchIsMissingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowMuchIsMissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
