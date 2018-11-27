import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblestudyPage } from './biblestudy.page';

describe('BiblestudyPage', () => {
  let component: BiblestudyPage;
  let fixture: ComponentFixture<BiblestudyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblestudyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblestudyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
