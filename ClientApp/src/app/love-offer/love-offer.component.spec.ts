import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveOfferComponent } from './love-offer.component';

describe('LoveOfferComponent', () => {
  let component: LoveOfferComponent;
  let fixture: ComponentFixture<LoveOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoveOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
