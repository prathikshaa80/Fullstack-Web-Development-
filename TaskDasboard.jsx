import React, { useState } from "react";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), name: taskInput },
    ]);
    setTaskInput("");
  };

  const removeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 Task List Dashboard</h1>

      <div style={styles.inputSection}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add Task
        </button>
      </div>

      <ul style={styles.taskList}>
        {tasks.length === 0 && (
          <p style={{ textAlign: "center" }}>No tasks added</p>
        )}

        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            <span>{task.name}</span>
            <button
              onClick={() => removeTask(task.id)}
              style={styles.deleteButton}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
  },
  inputSection: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
  },
  addButton: {
    padding: "8px 14px",
    background: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  deleteButton: {
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default TaskDashboard;
