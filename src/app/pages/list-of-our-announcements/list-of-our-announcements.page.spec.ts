import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfOurAnnouncementsPage } from './list-of-our-announcements.page';

describe('ListOfOurAnnouncementsPage', () => {
  let component: ListOfOurAnnouncementsPage;
  let fixture: ComponentFixture<ListOfOurAnnouncementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfOurAnnouncementsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfOurAnnouncementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
