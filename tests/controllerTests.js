describe('CoursesController test', function() {
  beforeEach(module('courseRoster'));

  var $controller;
  var CoursesFactory;

  beforeEach(inject(function(_$controller_, _CoursesFactory_) {
    $controller = _$controller_;
    CoursesFactory = _CoursesFactory_;
  }));

  it('can pull courses from the CoursesFactory', function() {
    CoursesFactory.courseName = "PHP/JavaScript/Drupal";
    CoursesFactory.addCourse();

    var controller = $controller('CoursesCtrl', {});

    expect(controller.courses[0].name).toBe("PHP/JavaScript/Drupal");
  })
});

describe('StudentsController test', function() {
  beforeEach(module('courseRoster'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('adds a student using the method .addStudent()', function() {
    var course = { name: "PHP/JavaScript/Drupal", id: 1, students: [] };
    var controller = $controller('StudentsCtrl', {});
    controller.course = course;
    controller.studentName = "Ian";
    controller.addStudent();

    expect(controller.course.students[0].name).toBe("Ian");
  });
});
