import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './login-modal/auth-guard.service';

const routes: Routes = [
  { 
    path: '', redirectTo: '/courses', pathMatch: 'full'
  },
  { 
    path: 'login', 
    loadChildren: () => import('./login-modal/login-modal.module').then(m => m.LoginModalModule)
  },
  { 
    path: 'courses',
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
        data: {
          breadcrumb: 'Dashboard',
        }
      },
      {
        path: 'new',
        canActivate: [AuthGuard],
        loadChildren: () => import('./add-course-modal/add-course-modal.module').then(m => m.AddCourseModalModule),
        data: {
          breadcrumb: 'New'
        }
      },
      {
        path: ':id',
        canActivate: [AuthGuard],
        loadChildren: () => import('./course-details/course-details.module').then(m => m.CourseDetailsModule),
        data: {
          breadcrumb: ''
        },
      },
    ]
  },
  { 
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class VcRoutingModule { }
