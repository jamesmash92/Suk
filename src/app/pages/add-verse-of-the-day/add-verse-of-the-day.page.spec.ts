import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVerseOfTheDayPage } from './add-verse-of-the-day.page';

describe('AddVerseOfTheDayPage', () => {
  let component: AddVerseOfTheDayPage;
  let fixture: ComponentFixture<AddVerseOfTheDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVerseOfTheDayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVerseOfTheDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
