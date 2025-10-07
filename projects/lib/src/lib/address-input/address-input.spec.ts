import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInput } from './address-input';
import { describe, beforeEach, it, expect } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';

describe('AddressInput', () => {
  let component: AddressInput;
  let fixture: ComponentFixture<AddressInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressInput],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddressInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
