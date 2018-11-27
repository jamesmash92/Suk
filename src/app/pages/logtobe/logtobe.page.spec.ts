import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogtobePage } from './logtobe.page';

describe('LogtobePage', () => {
  let component: LogtobePage;
  let fixture: ComponentFixture<LogtobePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogtobePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogtobePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
