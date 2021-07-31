import { AboutComponent } from './about/about.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'Mission', component:CourseComponent},
  {path: 'Playnow', component:JoinnowComponent},
  {path: 'About', component:AboutComponent},
  {path: 'comments', component:CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
