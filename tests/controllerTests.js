describe('CoursesController test', function() {
  beforeEach(module('courseRoster'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('assigns a course to CoursesController', function() {
    var course = { name: "PHP/JavaScript/Drupal", id: 1, students: [] };
    var controller = $controller('CoursesCtrl', {});
    controller.course = course;
    expect(controller.course.name).toBe("PHP/JavaScript/Drupal");
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
