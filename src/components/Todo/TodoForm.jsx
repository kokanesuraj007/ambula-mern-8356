import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() && taskDescription.trim()) {
      addTask(taskTitle, taskDescription, 'todo'); // Set the default status as 'todo'
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Enter task description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          style={{ height: '150px' }}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
