import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyDevotionsPage } from './all-my-devotions.page';

describe('AllMyDevotionsPage', () => {
  let component: AllMyDevotionsPage;
  let fixture: ComponentFixture<AllMyDevotionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMyDevotionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMyDevotionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
