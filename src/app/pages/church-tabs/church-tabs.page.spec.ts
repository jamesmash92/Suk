import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchTabsPage } from './church-tabs.page';

describe('ChurchTabsPage', () => {
  let component: ChurchTabsPage;
  let fixture: ComponentFixture<ChurchTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurchTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
