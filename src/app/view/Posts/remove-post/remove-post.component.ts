import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/shared/Services/post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-remove-post',
  templateUrl: './remove-post.component.html',
  styleUrls: ['./remove-post.component.scss'],
})
export class RemovePostComponent implements OnInit {
  @Input() postId!: number;

  constructor(
    public modal: NgbActiveModal,
    private _post: PostService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  removePost() {
    this._post.removePost(this.postId).subscribe({
      next: () => {
        this._toastr.success('Post successfully Removed', 'Remove Post', {
          timeOut: 2000,
          progressBar: true,
        });
      },
      error: (err) => {
        if (err.status === 200) {
          this._toastr.success('Post successfully Removed', 'Remove Post', {
            timeOut: 2000,
            progressBar: true,
          });
        } else {
          this._toastr.warning('Failed Remove Post', 'Remove Post', {
            timeOut: 2000,
            progressBar: true,
          });
        }
      },
    });
  }
}
