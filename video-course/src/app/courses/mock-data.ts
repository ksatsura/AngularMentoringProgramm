import { Course } from '../models/course-model';

export const coursesList: Course[] = [
  { id: 1, title: 'Course 1 title', description: 'Course 1 description', creationDate: '03/09/2021', duration: 60, topRated: true },
  { id: 2, title: 'Course 2 title', description: 'Course 2 description', creationDate: '04/10/2021', duration: 80, topRated: false },
  { id: 3, title: 'Course 3 title', description: 'Course 3 description', creationDate: '03/08/2021', duration: 70, topRated: true },
  { id: 4, title: 'Course 4 title', description: 'Course 4 description', creationDate: '03/07/2021', duration: 90, topRated: false },
  { id: 5, title: 'Course 5 title', description: 'Course 5 description', creationDate: '04/11/2021', duration: 100, topRated: true },
  { id: 6, title: 'Course 6 title', description: 'Course 6 description', creationDate: '02/05/2021', duration: 90, topRated: false }
];
