import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseOfTheDayPage } from './verse-of-the-day.page';

describe('VerseOfTheDayPage', () => {
  let component: VerseOfTheDayPage;
  let fixture: ComponentFixture<VerseOfTheDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseOfTheDayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseOfTheDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
