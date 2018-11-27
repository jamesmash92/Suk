import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOurAnnouncementsPage } from './add-our-announcements.page';

describe('AddOurAnnouncementsPage', () => {
  let component: AddOurAnnouncementsPage;
  let fixture: ComponentFixture<AddOurAnnouncementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOurAnnouncementsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOurAnnouncementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
