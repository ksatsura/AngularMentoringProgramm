import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseModalComponent } from './add-course-modal/add-course-modal.component';

@NgModule({
  declarations: [AddCourseModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AddCourseModalComponent,
  ]
})
export class AddCourseModalModule { }
