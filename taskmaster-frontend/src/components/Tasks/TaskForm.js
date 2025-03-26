import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Média");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/tasks", { title, description, dueDate, priority })
      .then((response) => {
        setTasks((prevTasks) => [...prevTasks, response.data]);
        setTitle("");
        setDescription("");
        setDueDate("");
        setPriority("Média");
      })
      .catch((error) => console.error("Erro ao criar tarefa", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>
      <button type="submit">Criar Tarefa</button>
    </form>
  );
};

export default TaskForm;
