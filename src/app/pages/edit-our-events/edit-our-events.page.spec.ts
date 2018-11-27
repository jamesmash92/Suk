import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOurEventsPage } from './edit-our-events.page';

describe('EditOurEventsPage', () => {
  let component: EditOurEventsPage;
  let fixture: ComponentFixture<EditOurEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOurEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOurEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
