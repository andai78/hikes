/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HikeListComponent } from './hike-list.component';

describe('HikeListComponent', () => {
  let component: HikeListComponent;
  let fixture: ComponentFixture<HikeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
