courseRoster.controller('CoursesCtrl', function CoursesCtrl(CoursesFactory) {
  var vm = this;
  vm.courses = CoursesFactory.courses;
  vm.CoursesFactory = CoursesFactory;
});
