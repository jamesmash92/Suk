import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfOurBlogPage } from './list-of-our-blog.page';

describe('ListOfOurBlogPage', () => {
  let component: ListOfOurBlogPage;
  let fixture: ComponentFixture<ListOfOurBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfOurBlogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfOurBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
