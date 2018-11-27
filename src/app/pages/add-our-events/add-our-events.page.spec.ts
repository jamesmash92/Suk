import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOurEventsPage } from './add-our-events.page';

describe('AddOurEventsPage', () => {
  let component: AddOurEventsPage;
  let fixture: ComponentFixture<AddOurEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOurEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOurEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
