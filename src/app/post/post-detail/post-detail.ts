import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Logger, TplCard } from 'lib';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
  imports: [AsyncPipe, TplCard, NgOptimizedImage],
})
export class PostDetail {
  protected post$ = inject(ActivatedRoute).data.pipe(map((res) => res['post']));
}
