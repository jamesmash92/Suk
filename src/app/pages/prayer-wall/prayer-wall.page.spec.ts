import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerWallPage } from './prayer-wall.page';

describe('PrayerWallPage', () => {
  let component: PrayerWallPage;
  let fixture: ComponentFixture<PrayerWallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerWallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerWallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
