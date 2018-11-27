import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonPage } from './sermon.page';

describe('SermonPage', () => {
  let component: SermonPage;
  let fixture: ComponentFixture<SermonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SermonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
