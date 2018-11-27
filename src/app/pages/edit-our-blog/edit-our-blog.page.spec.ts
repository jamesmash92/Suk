import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOurBlogPage } from './edit-our-blog.page';

describe('EditOurBlogPage', () => {
  let component: EditOurBlogPage;
  let fixture: ComponentFixture<EditOurBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOurBlogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOurBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
