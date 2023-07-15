export const getTasks = () => {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      return JSON.parse(tasks);
    } else {
      return [];
    }
  };
  
  export const addNewTask = (taskName) => {
    const tasks = getTasks();
    const newTask = { id: Date.now(), name: taskName };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return newTask;
  };
  
  export const deleteTask = (taskId) => {
    let tasks = getTasks();
    tasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return { success: true };
  };
  