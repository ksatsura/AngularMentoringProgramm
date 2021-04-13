import { CoursesService } from '../../services/courses.service';

export class MockCourseService extends CoursesService {
  getList()  {}
  createCourse() {}
  getItemById(id: number) { return { id: 1 , name: 'name', date: '2020-02-20', length: '100', description: 'Description', isTopRated: 'false'}; }
  updateItem(id: number) {}
  removeItem(id: number) {}
};
