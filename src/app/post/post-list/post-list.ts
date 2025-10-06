import { Component, inject } from '@angular/core';
import { Posts } from '../services/posts';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList {
  protected posts$ = inject(Posts).getPosts();
}
