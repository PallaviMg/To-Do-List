import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleUpdateTask = () => {
    if (editedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editedTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditedTask('');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Todo List Application</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddTask}>Add Task</button>
      </div>
      <h2>Tasks</h2>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  className="form-control"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button className="btn btn-success ml-2" onClick={handleUpdateTask}>Update</button>
              </>
            ) : (
              <>
                {task}
                <div>
                  <button className="btn btn-warning ml-2" onClick={() => handleEditTask(index)}>Edit</button>
                  <button className="btn btn-danger ml-2" onClick={() => handleDeleteTask(index)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;