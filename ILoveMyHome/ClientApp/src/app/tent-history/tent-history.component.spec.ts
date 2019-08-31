import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TentHistoryComponent } from './tent-history.component';

describe('TentHistoryComponent', () => {
  let component: TentHistoryComponent;
  let fixture: ComponentFixture<TentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
