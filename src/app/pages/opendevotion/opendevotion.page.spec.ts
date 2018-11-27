import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendevotionPage } from './opendevotion.page';

describe('OpendevotionPage', () => {
  let component: OpendevotionPage;
  let fixture: ComponentFixture<OpendevotionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpendevotionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpendevotionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
