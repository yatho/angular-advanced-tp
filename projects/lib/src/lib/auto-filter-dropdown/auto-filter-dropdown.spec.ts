import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFilterDropdown } from './auto-filter-dropdown';
import { provideZonelessChangeDetection } from '@angular/core';
import { describe, beforeEach, it, expect } from 'vitest';

describe('AutoFilterDropdown', () => {
  let component: AutoFilterDropdown;
  let fixture: ComponentFixture<AutoFilterDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoFilterDropdown],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoFilterDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
