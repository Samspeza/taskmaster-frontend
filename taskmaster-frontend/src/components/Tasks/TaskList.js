import React, { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const tasksData = await getTasks();
    setTasks(tasksData);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} onTaskUpdated={loadTasks} />
      ))}
    </div>
  );
};

export default TaskList;
