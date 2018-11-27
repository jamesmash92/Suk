import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyDevotionsPage } from './edit-my-devotions.page';

describe('EditMyDevotionsPage', () => {
  let component: EditMyDevotionsPage;
  let fixture: ComponentFixture<EditMyDevotionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMyDevotionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMyDevotionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
