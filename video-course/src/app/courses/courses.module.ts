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
import { CourseHighlightBindingDirective } from '../directives/course-highlight-binding.directive';
import { CourseStarComponent } from './course-list-item/course-star/course-star.component';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { DurationPipe } from '../pipes/duration.pipe';
import { DatePipe } from '../pipes/date.pipe';
import { CoursesComponentRoutingModule } from './courses-routing.module';

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
    DeleteButtonComponent,
    CourseHighlightBindingDirective,
    CourseStarComponent,
    OrderByPipe,
    DurationPipe,
    DatePipe,
  ],
  imports: [
    CommonModule,
    CoreModule,
    CoursesComponentRoutingModule,
  ],
  exports: [
    CourseListComponent,
    AddCourseButtonComponent,
    LoadMoreButtonComponent,
    CoursesComponent,
  ]
})
export class CoursesModule { }
