"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTask = exports.addNewTask = exports.getTasks = void 0;

var getTasks = function getTasks() {
  var tasks = localStorage.getItem('tasks');

  if (tasks) {
    return JSON.parse(tasks);
  } else {
    return [];
  }
};

exports.getTasks = getTasks;

var addNewTask = function addNewTask(taskName) {
  var tasks = getTasks();
  var newTask = {
    id: Date.now(),
    name: taskName
  };
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return newTask;
};

exports.addNewTask = addNewTask;

var deleteTask = function deleteTask(taskId) {
  var tasks = getTasks();
  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return {
    success: true
  };
};

exports.deleteTask = deleteTask;
//# sourceMappingURL=api.dev.js.map
