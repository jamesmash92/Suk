import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSermonPage } from './post-sermon.page';

describe('PostSermonPage', () => {
  let component: PostSermonPage;
  let fixture: ComponentFixture<PostSermonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSermonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSermonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
