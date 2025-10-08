import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Posts } from '../post/services/posts';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [RouterLink],
})
export class Header {
  private post = inject(Posts);
  protected selectedAuthors = this.post.selectedAuthors;
  protected selectedPosts = this.post.selectedPosts;
}
