import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TplCard } from 'lib';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
  imports: [AsyncPipe, TplCard],
})
export class PostDetail {
  protected post$ = inject(ActivatedRoute).data.pipe(map((res) => res['post']));
}
