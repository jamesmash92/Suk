import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayeritemPage } from './prayeritem.page';

describe('PrayeritemPage', () => {
  let component: PrayeritemPage;
  let fixture: ComponentFixture<PrayeritemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayeritemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayeritemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
