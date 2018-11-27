import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOurAnnouncementsPage } from './edit-our-announcements.page';

describe('EditOurAnnouncementsPage', () => {
  let component: EditOurAnnouncementsPage;
  let fixture: ComponentFixture<EditOurAnnouncementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOurAnnouncementsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOurAnnouncementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
