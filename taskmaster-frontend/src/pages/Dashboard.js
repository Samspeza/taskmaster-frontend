import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TaskList from "../components/Tasks/TaskList";
import TaskForm from "../components/Tasks/TaskForm";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("/api/tasks")
      .then((response) => setTasks(response.data))
      .catch(() => history.push("/login"));
  }, [history]);

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
