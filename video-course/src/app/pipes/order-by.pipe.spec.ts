import { OrderByPipe } from './order-by.pipe';
import { coursesList } from '../courses/mock-data/mock-data';


const orderedCoursesList = [
  { id: 6, name: 'Course 6 name', description: 'Course 6 description', date: '02/05/2021', length: '90', isTopRated: 'false' },
  { id: 4, name: 'Course 4 name', description: 'Course 4 description', date: '03/07/2021', length: '90', isTopRated: 'false' },
  { id: 3, name: 'Course 3 name', description: 'Course 3 description', date: '03/08/2021', length: '70', isTopRated: 'true' },
  { id: 1, name: 'Course 1 name', description: 'Course 1 description', date: '03/09/2021', length: '60', isTopRated: 'true' },
  { id: 2, name: 'Course 2 name', description: 'Course 2 description', date: '04/10/2021', length: '80', isTopRated: 'false' },
  { id: 5, name: 'Course 5 name', description: 'Course 5 description', date: '04/11/2021', length: '100', isTopRated: 'true' },
];

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform by sorting the array in order of creation date by ', () => {
    expect(pipe.transform(coursesList)).toEqual(orderedCoursesList);
  });
});
