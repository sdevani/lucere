app.factory("ModuleBuilder", ["Module", "Lesson", function(Module, Lesson) {

  var module = function(id) {
    return Module.get({id: id});
  };

  var addLesson = function(title, moduleId, cb) {
    var lesson = new Lesson({title: title, module: moduleId});
    lesson.$save(cb);
  };

  var removeLesson = function(lessonId) {
    Lesson.remove({id: lessonId});
  };

  return {
    module: module,
    addLesson: addLesson,
    removeLesson: removeLesson
  };
}]);