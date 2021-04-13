import { FilterPipe } from './filter.pipe';
import { coursesList } from '../courses/mock-data/mock-data';

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform array to view [{ id: 1, title: "Course 1 name", description: "Course 1 description", creationDate: "03-09-2021", duration: 60, topRated: true }] when search name "Course 1"', () => {
    expect(pipe.transform('Course 1', coursesList)).toEqual([{ id: 1, name: 'Course 1 name', description: 'Course 1 description', date: '03/09/2021', length: '60', isTopRated: 'true' }]);
  });

  it('should transform array to empty one if no matches are find', () => {
    expect(pipe.transform('Course 20', coursesList)).toEqual([]);
  });

  it('should not transform array if no search parameters are provided', () => {
    expect(pipe.transform('', coursesList)).toEqual(coursesList);
  });
});
