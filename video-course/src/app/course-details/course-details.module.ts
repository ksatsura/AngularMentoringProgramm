import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoreModule } from '../core/core.module';
import { CourseDetailsRoutingModule } from './course-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    CourseDetailsRoutingModule,
  ],
  exports: [],
  declarations: [CourseDetailsComponent],
})

export class CourseDetailsModule { }
