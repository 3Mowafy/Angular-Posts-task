import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostBtnComponent } from './add-post-btn.component';

describe('ButtonComponent', () => {
  let component: AddPostBtnComponent;
  let fixture: ComponentFixture<AddPostBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPostBtnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPostBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
