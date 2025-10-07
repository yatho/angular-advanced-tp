import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form } from './form';
import { describe, beforeEach, it, expect } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('Form', () => {
  let component: Form;
  let fixture: ComponentFixture<Form>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Form],
      providers: [provideZonelessChangeDetection(), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(Form);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
