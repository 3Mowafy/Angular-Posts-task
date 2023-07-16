import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/shared/Services/post.service';
import { Post } from 'src/app/shared/interfaces/post';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  postForm: FormGroup = new FormGroup({
    post_title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    post_message: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    post_image: new FormControl('', Validators.required),
  });

  constructor(
    public modal: NgbActiveModal,
    private _post: PostService,
    private _toastr: ToastrService
  ) {}

  get postFormValidation() {
    return this.postForm.controls;
  }

  addPostPhoto(event: any) {
    this.postForm.value.post_image = event.target.files[0];
  }

  createNewPost() {
    const postFormValue: Post = this.postForm.value;
    const upload = new FormData();
    upload.append('post_title', postFormValue.post_title);
    upload.append('post_message', postFormValue.post_message);
    upload.append('post_image', postFormValue.post_image);

    if (this.postForm.valid) {
      this._post.addPost(upload).subscribe({
        next: () => {
          this._toastr.success('Post Added successfully', 'Add Post', {
            timeOut: 2000,
            progressBar: true,
          });
        },
        error: (err) => {
          if (err.status === 200) {
            this._toastr.success('Post Added successfully', 'Add Post', {
              timeOut: 2000,
              progressBar: true,
            });
          } else {
            this._toastr.warning("Can't Add Post", 'Add Post', {
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
