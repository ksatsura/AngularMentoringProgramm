import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseModalComponent } from './add-course-modal/add-course-modal.component';

const routes: Routes = [
  {
    path: '',
    component: AddCourseModalComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})

export class AddCourseModalRoutingModule { }