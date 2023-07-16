import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/shared/Services/post.service';
import { Post } from 'src/app/shared/interfaces/post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  @Input() postId!: number;
  isChanged: boolean = false;

  postForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    post_title: new FormControl('', [Validators.minLength(3)]),
    post_message: new FormControl('', [Validators.minLength(3)]),
    post_image: new FormControl(''),
  });

  get postFormValidation() {
    return this.postForm.controls;
  }

  constructor(
    public modal: NgbActiveModal,
    private _post: PostService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  editPostPhoto(event: any) {
    this.postForm.value.post_image = event.target.files[0];
    this.isChanged = true;
  }

  getPost() {
    this._post.getAllPosts().subscribe({
      next: (data) => {
        const postData = data.filter((data) => data.id == this.postId);
        this.postForm.patchValue(postData[0]);
      },
    });
  }

  editPost() {
    const postFormValue = this.postForm.value;
    const upload = new FormData();
    upload.append('id', postFormValue.id);
    upload.append('post_title', postFormValue.post_title);
    upload.append('post_message', postFormValue.post_message);

    if (this.isChanged) upload.append('post_image', postFormValue.post_image);

    if (this.postForm.valid) {
      this._post.editPost(upload).subscribe({
        next: () => {
          this._toastr.success('Post updated successfully', 'Edit Post', {
            timeOut: 2000,
            progressBar: true,
          });
        },
        error: (err) => {
          if (err.status === 200) {
            this._toastr.success('Post updated successfully', 'Edit Post', {
              timeOut: 2000,
              progressBar: true,
            });
          } else {
            this._toastr.warning("Can't Edit Post", 'Edit Post', {
              timeOut: 2000,
              progressBar: true,
            });
          }
        },
      });
    } else {
      this._toastr.error('invalid Post Data', 'Post Error', {
        timeOut: 2000,
        progressBar: true,
      });
    }
  }
}
