import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/shared/Services/post.service';
import { Post } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  post: Post | undefined;
  isShow: boolean = false;

  constructor(
    private _post: PostService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id: any = this._route.snapshot.paramMap.get('id');
    this._post.getAllPosts().subscribe({
      next: (data) => {
        const postData = data.filter((data) => data.id == id);
        if (!postData.length) this._router.navigateByUrl('');
        this.post = postData[0];
      },
      complete: () => (this.isShow = true),
    });
  }

  errorHandler(event: any) {
    event.target.src = 'assets/posts/post-err.webp';
  }
}
