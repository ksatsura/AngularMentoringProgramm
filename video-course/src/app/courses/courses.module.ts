import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { AddCourseButtonComponent } from './add-course-button/add-course-button.component';
import { LoadMoreButtonComponent } from './load-more-button/load-more-button.component';
import { CoursesComponent } from './courses/courses.component';
import { CoreModule } from '../core/core.module';
import { DurationComponent } from './course-list-item/duration/duration.component';
import { CreationDateComponent } from './course-list-item/creation-date/creation-date.component';
import { EditButtonComponent } from './course-list-item/edit-button/edit-button.component';
import { DeleteButtonComponent } from './course-list-item/delete-button/delete-button.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    AddCourseButtonComponent,
    LoadMoreButtonComponent,
    CoursesComponent,
    DurationComponent,
    CreationDateComponent,
    EditButtonComponent,
    DeleteButtonComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    CourseListComponent,
    AddCourseButtonComponent,
    LoadMoreButtonComponent,
    CoursesComponent,
  ]
})
export class CoursesModule { }
