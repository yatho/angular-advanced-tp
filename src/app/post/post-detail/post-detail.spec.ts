import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetail } from './post-detail';
import { describe, beforeEach, it, expect } from 'vitest';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

describe('PostDetail', () => {
  let component: PostDetail;
  let fixture: ComponentFixture<PostDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PostDetail],
    providers: [provideZonelessChangeDetection(),
      provideRouter([])
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(PostDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
