describe('CoursesFactory test', function() {
  beforeEach(module('courseRoster'));

  var CoursesFactory;

  beforeEach(inject(function(_CoursesFactory_) {
    CoursesFactory = _CoursesFactory_;
  }));

  it('should have an .addCourse() method', function() {
    expect(angular.isFunction(CoursesFactory.addCourse)).toBe(true);
  });

  it('adds a course using the method .addCourse()', function() {
    var course = { name: "PHP/JavaScript/Drupal", id: 1, students: [] };
    CoursesFactory.courseName = "PHP/JavaScript/Drupal";
    CoursesFactory.addCourse();
    expect(CoursesFactory.courses[0].name).toBe("PHP/JavaScript/Drupal");
  });
});

describe('UtilitiesFactory test', function() {
  beforeEach(module('courseRoster'));

  var UtilitiesFactory;

  beforeEach(inject(function(_UtilitiesFactory_) {
    UtilitiesFactory = _UtilitiesFactory_;
  }));

  it('has a findById function', function() {
    expect(angular.isFunction(UtilitiesFactory.findById)).toBe(true);
  });

  it('can find a specific course based on its id', function() {
    var courses = [{ name: "PHP/JavaScript/Drupal", id: 1, students: [] }, { name: "Ruby/JavaScript/Rails", id: 2, students: [] }, { name: "Java/JavaScript/Android", id: 3, students: [] }];
    var course = UtilitiesFactory.findById(courses, 2);

    expect(course.name).toBe("Ruby/JavaScript/Rails");
  });
});
