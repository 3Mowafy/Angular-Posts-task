import { Component, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPostComponent } from '../../add-post/add-post.component';
import { AllPostsComponent } from '../all-posts.component';

@Component({
  selector: 'app-post-btn',
  templateUrl: './add-post-btn.component.html',
  styleUrls: ['./add-post-btn.component.scss'],
})
export class AddPostBtnComponent {
  @Output() refresh = new EventEmitter();

  constructor(private _modalService: NgbModal) {}

  addModal() {
    const add = this._modalService.open(AddPostComponent);
    add.closed.subscribe((data) => {
      setTimeout(() => {
        if (data === 'add') {
          this.refresh.emit();
        }
      }, 4000);
    });
  }
}
