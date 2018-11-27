import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTheVerseOfTheDayPage } from './list-of-the-verse-of-the-day.page';

describe('ListOfTheVerseOfTheDayPage', () => {
  let component: ListOfTheVerseOfTheDayPage;
  let fixture: ComponentFixture<ListOfTheVerseOfTheDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTheVerseOfTheDayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTheVerseOfTheDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
