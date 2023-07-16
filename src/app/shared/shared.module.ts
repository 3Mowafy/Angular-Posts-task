import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SoonComponent } from './components/soon/soon.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    SoonComponent,
    SkeletonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SoonComponent,
    SkeletonComponent,
    RouterModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
  ],
})
export class SharedModule {}
