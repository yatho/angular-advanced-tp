import { Component, inject } from '@angular/core';
import { Posts, Post } from '../services/posts';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
  imports: [RouterOutlet, RouterLinkActive, RouterLink, AsyncPipe],
})
export class PostList {
  private postService = inject(Posts);
  protected posts$ = this.postService.getPosts();

  protected selectedPost(post: Post): void {
    this.postService.selectPost(post);
  }
}
