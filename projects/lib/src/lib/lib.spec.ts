import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib } from './lib';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Lib', () => {
  let component: Lib;
  let fixture: ComponentFixture<Lib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
