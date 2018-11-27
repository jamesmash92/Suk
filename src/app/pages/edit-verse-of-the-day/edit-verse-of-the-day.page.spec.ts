import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVerseOfTheDayPage } from './edit-verse-of-the-day.page';

describe('EditVerseOfTheDayPage', () => {
  let component: EditVerseOfTheDayPage;
  let fixture: ComponentFixture<EditVerseOfTheDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVerseOfTheDayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVerseOfTheDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
