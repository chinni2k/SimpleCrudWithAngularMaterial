/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenricComponent } from './genric.component';

describe('GenricComponent', () => {
  let component: GenricComponent;
  let fixture: ComponentFixture<GenricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
