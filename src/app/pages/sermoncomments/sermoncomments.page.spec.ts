import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SermoncommentsPage } from './sermoncomments.page';

describe('SermoncommentsPage', () => {
  let component: SermoncommentsPage;
  let fixture: ComponentFixture<SermoncommentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SermoncommentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SermoncommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
