import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/shared/Services/post.service';
import { Post } from 'src/app/shared/interfaces/post';
import { EditPostComponent } from '../edit-post/edit-post.component';
import { RemovePostComponent } from '../remove-post/remove-post.component';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {
  allPosts: Post[] = [];
  allPostsFilter: Post[] = [];
  counts: number[] = new Array<number>(6);
  isShow: boolean = false;

  constructor(private _post: PostService, private _modalService: NgbModal) {}

  ngOnInit(): void {
    this.showAllPosts();
  }

  showAllPosts() {
    this._post.getAllPosts().subscribe({
      next: (posts) => (this.allPosts = posts),

      error: () => (this.isShow = false),

      complete: () => {
        this.isShow = true;
        this.allPostsFilter = this.allPosts;
      },
    });
  }

  errorHandler(event: any) {
    event.target.src = 'assets/posts/post-err.webp';
  }

  editModal(id: number) {
    const edit = this._modalService.open(EditPostComponent);
    edit.componentInstance.postId = id;

    edit.closed.subscribe((data) => {
      setTimeout(() => {
        if (data === 'edit') return this.showAllPosts();
      }, 4000);
    });
  }

  deleteModal(id: number) {
    const remove = this._modalService.open(RemovePostComponent);
    remove.componentInstance.postId = id;

    remove.closed.subscribe((data) => {
      setTimeout(() => {
        if (data === 'delete') return this.showAllPosts();
      }, 3000);
    });
  }

  filter(event: any) {
    this.allPostsFilter = this.allPosts.filter((posts) =>
      posts.post_title.toLowerCase().includes(event.value.toLowerCase())
    );
  }
}
