import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vision2023Page } from './vision2023.page';

describe('Vision2023Page', () => {
  let component: Vision2023Page;
  let fixture: ComponentFixture<Vision2023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vision2023Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vision2023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
