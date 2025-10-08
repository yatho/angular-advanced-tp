import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal, Signal } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

export type Post = {
  id: number;
  title: string;
  content: string;
  author: number;
  photo: string;
};

@Injectable({
  providedIn: 'root',
})
export class Posts {
  private http = inject(HttpClient);

  private _postList?: Post[];

  private _selectedPosts = signal<Array<Post>>([]);
  private _selectAuthors = computed(() => [
    ...new Set(this._selectedPosts().map((post) => post.author)),
  ]);

  public get selectedPosts(): Signal<Array<Post>> {
    return this._selectedPosts.asReadonly();
  }

  public get selectedAuthors(): Signal<Array<number>> {
    return this._selectAuthors;
  }

  public getPosts(): Observable<Post[]> {
    if (this._postList) return of(this._postList);
    return this.http.get<Post[]>('/api/posts').pipe(
      tap((res) => {
        this._postList = res;
      }),
    );
  }

  public getPostById(id: number): Observable<Post> {
    const post = this._postList?.find((post) => post.id === id);
    if (post) return of(post);
    return this.http.get<Post>(`/api/posts/${id}`).pipe(
      tap((res) => {
        if (!this._postList) return;
        this._postList = this._postList!.filter((elt) => elt.id !== id);
        this._postList.push(res);
      }),
    );
  }

  public selectPost(post: Post): void {
    this._selectedPosts.update((oldPosts) => [...new Set([...oldPosts, post])]);
  }
}
