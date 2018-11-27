import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMydevotiosToDatabasePage } from './add-mydevotios-to-database.page';

describe('AddMydevotiosToDatabasePage', () => {
  let component: AddMydevotiosToDatabasePage;
  let fixture: ComponentFixture<AddMydevotiosToDatabasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMydevotiosToDatabasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMydevotiosToDatabasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
