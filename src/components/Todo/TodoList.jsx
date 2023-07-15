import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task #</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            task={task}
            taskNumber={index + 1}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
