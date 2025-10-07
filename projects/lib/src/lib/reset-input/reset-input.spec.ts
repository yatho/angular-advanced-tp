import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetInput } from './reset-input';
import { describe, beforeEach, it, expect } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ResetInput', () => {
  let component: ResetInput;
  let fixture: ComponentFixture<ResetInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetInput],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
