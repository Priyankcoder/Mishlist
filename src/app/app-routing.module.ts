import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { BookmarkComponent } from './bookmark/bookmark.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookmark', component: BookmarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
