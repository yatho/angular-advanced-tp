import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  standalone: false,
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css'
})
export class PostDetail {
  protected post$ = inject(ActivatedRoute).data.pipe(
    map(res => res['post'])
  );
}
