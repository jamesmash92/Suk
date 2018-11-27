import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOurBlogPage } from './add-our-blog.page';

describe('AddOurBlogPage', () => {
  let component: AddOurBlogPage;
  let fixture: ComponentFixture<AddOurBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOurBlogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOurBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
