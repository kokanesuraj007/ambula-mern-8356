import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Task = ({ task, taskNumber, deleteTask, editTask }) => {
  const { id, title: initialTitle, description: initialDescription, status: initialStatus } = task;
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [status, setStatus] = useState(initialStatus);
  const [isEditing, setIsEditing] = useState(false);


  const handleDelete = () => {
    deleteTask(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(id, title, description, status);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTitle(initialTitle);
    setDescription(initialDescription);
    setStatus(initialStatus);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    editTask(id, title, description, e.target.value);
  };

  if (isEditing) {
    return (
      <tr>
        <td>{taskNumber}</td>
        <td colSpan="3">
          <input type="text" value={title} onChange={handleTitleChange} />
        </td>
        <td>
          <textarea value={description} onChange={handleDescriptionChange}></textarea>
        </td>
        <td>
          <select value={status} onChange={handleStatusChange}>
            <option value="Todo">Todo</option>
            <option value="Progress">Progress</option>
            <option value="Cancel">Cancel</option>
            <option value="Completed">Completed</option>
          </select>
        </td>
        <td>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{taskNumber}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>
          <select value={status} onChange={handleStatusChange}>
            <option value="Todo">Todo</option>
            <option value="Progress">Progress</option>
            <option value="Cancel">Cancel</option>
            <option value="Completed">Completed</option>
          </select>
        </td>
        <td>
          <button onClick={handleEdit}>
            <FaEdit />
          </button>

        </td>
        <td>
          <button onClick={handleDelete}>
            <FaTrash />
          </button>

        </td>
      </tr>
    );
  }
};

export default Task;
