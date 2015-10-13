courseRoster.controller('StudentsCtrl', function StudentsCtrl($stateParams, CoursesFactory, UtilitiesFactory) {
  var vm = this;
  vm.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId);
  vm.addStudent = function() {
    vm.course.students.push({ name: vm.studentName });
    vm.studentName = null;
  };

  // vm.courseName = vm.course.name;

  vm.alertUser = function(alertMessage) {
    alert(alertMessage);
  };
});
