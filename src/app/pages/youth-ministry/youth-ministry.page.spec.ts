import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthMinistryPage } from './youth-ministry.page';

describe('YouthMinistryPage', () => {
  let component: YouthMinistryPage;
  let fixture: ComponentFixture<YouthMinistryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthMinistryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthMinistryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
