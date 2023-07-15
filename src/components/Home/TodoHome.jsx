import React, { useState, useEffect } from 'react';
import TaskList from '../Todo/TodoList';
import AddTaskForm from '../Todo/TodoForm';
import { Modal, Button, Row, Col } from 'react-bootstrap';

const TodoHome = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskTitle, taskDescription) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      status: 'Todo',
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowModal(false);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newTitle, newDescription, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle, description: newDescription, status: newStatus } : task
      )
    );
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const getTotalTasks = () => tasks.length;

  const getCountByStatus = (status) => {
    return tasks.reduce((count, task) => {
      return task.status.toLowerCase() === status.toLowerCase() ? count + 1 : count;
    }, 0);
  };

  const totalTasks = getTotalTasks();
  const todoCount = getCountByStatus('Todo');
  const progressCount = getCountByStatus('Progress');
  const cancelCount = getCountByStatus('Cancel');
  const completedCount = getCountByStatus('Completed');

  return (
    <div>
      <Row className="justify-content-end">
        <Col xs={12} md={6} className="text-center">
          <h2>To-Do List</h2>
        </Col>
        <Col xs={12} md={6} className="text-end">
          <Button variant="primary" onClick={handleShowModal} style={{ width: '540px' }}>
            +
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8} className="border-end">
          <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
        </Col>
        <Col xs={12} md={4}>
          <div>
            <h2>Task Counts:</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td style={{fontWeight:"bold"}}>Total Tasks:</td>
                  <td style={{ backgroundColor: 'teal', color:'white', fontWeight:"bold" }}>{totalTasks}</td>
                </tr>
                <tr>
                  <td style={{fontWeight:"bold"}}>Todo:</td>
                  <td style={{ backgroundColor: 'yellow', color:'white', fontWeight:"bold" }}>{todoCount}</td>
                </tr>
                <tr>
                  <td style={{fontWeight:"bold"}}>Progress:</td>
                  <td style={{ backgroundColor: 'orange', color:'white', fontWeight:"bold" }}>{progressCount}</td>
                </tr>
                <tr>
                  <td style={{fontWeight:"bold"}}>Cancel:</td>
                  <td style={{ backgroundColor: 'red', color:'white', fontWeight:"bold" }}>{cancelCount}</td>
                </tr>
                <tr>
                  <td style={{fontWeight:"bold"}}>Completed:</td>
                  <td style={{ backgroundColor: 'green', color:'white', fontWeight:"bold" }}>{completedCount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTaskForm addTask={addTask} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TodoHome;
