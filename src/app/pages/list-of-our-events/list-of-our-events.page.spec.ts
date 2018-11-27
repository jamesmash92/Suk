import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfOurEventsPage } from './list-of-our-events.page';

describe('ListOfOurEventsPage', () => {
  let component: ListOfOurEventsPage;
  let fixture: ComponentFixture<ListOfOurEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfOurEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfOurEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
