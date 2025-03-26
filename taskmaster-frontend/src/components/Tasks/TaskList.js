import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h3>Suas Tarefas</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Prioridade: {task.priority}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
