import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AddPostComponent } from './add-post/add-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { RemovePostComponent } from './remove-post/remove-post.component';
import { AddPostBtnComponent } from './all-posts/add-post-btn/add-post-btn.component';
import { SearchComponent } from './all-posts/search/search.component';

@NgModule({
  declarations: [
    AddPostComponent,
    AllPostsComponent,
    SinglePostComponent,
    EditPostComponent,
    RemovePostComponent,
    AddPostBtnComponent,
    SearchComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [AllPostsComponent, AddPostBtnComponent],
})
export class PostModule {}
