import { describe, expect, it } from 'vitest';
import { FilteredListPipe } from './filtered-list-pipe';

describe('FilteredListPipe', () => {
  it('create an instance', () => {
    const pipe = new FilteredListPipe();
    expect(pipe).toBeTruthy();
  });
});
