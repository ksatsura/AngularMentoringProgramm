import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseModalComponent } from './add-course-modal/add-course-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseModalRoutingModule } from './add-course-modal-routing.module';

@NgModule({
  declarations: [AddCourseModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddCourseModalRoutingModule,
  ],
  exports: [
    AddCourseModalComponent,
  ]
})
export class AddCourseModalModule { }
