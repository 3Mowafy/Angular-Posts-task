import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/pages/home/home.component';
import { AboutComponent } from './view/pages/about/about.component';
import { ContactComponent } from './view/pages/contact/contact.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SinglePostComponent } from './view/Posts/single-post/single-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: HomeComponent,
  },
  {
    path: 'posts/:id',
    component: SinglePostComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
