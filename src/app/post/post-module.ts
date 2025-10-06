import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Author } from './author/author';
import { PostDetail } from './post-detail/post-detail';
import { PostList } from './post-list/post-list';
import { PostRoutingModule } from './post-routing-module';



@NgModule({
  declarations: [
    Author,
    PostDetail,
    PostList
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
