import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Column from "./components/Column";
import CreateNewTaskModal from "./components/CreateNewTaskModal";

function App() {
  const [statuses, setStatuses] = useState([]);
  const [tasks, setTasks] = useState([]);

  const priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const statusesTitles = statuses.map((status) => status.title);

  const getStatuses = () => {
    axios
      .get("https://expressjs-server.vercel.app/statuses")
      .then((response) => setStatuses(response.data))
      .catch(() => alert("Statuses not found"));
    // .finally();
  };

  const getTasks = () => {
    axios
      .get("https://expressjs-server.vercel.app/tasks")
      .then((response) => setTasks(response.data))
      .catch(() => alert("Tasks not found"));
  };

  useEffect(() => {
    getStatuses();
    getTasks();
  }, []);

  const changePriority = (id, newPriority) => {
    axios
      .patch(`https://expressjs-server.vercel.app/tasks/${id}`, {
        priority: newPriority,
      })
      .then(() => getTasks())
      .catch(() => alert("Task not found"));
  };

  const changeStatus = (id, currentStatus, direction) => {
    const newIndex = statusesTitles.indexOf(currentStatus) + direction;
    const newStatus = statusesTitles[newIndex];
    axios
      .patch(`https://expressjs-server.vercel.app/tasks/${id}`, {
        status: newStatus,
      })
      .then(() => getTasks())
      .catch(() => alert("Task not found"));
  };

  const createNewTask = (newTask) => {
    axios
      .post(`https://expressjs-server.vercel.app/tasks`, newTask)
      .then(() => getTasks())
      .catch(() => alert("Task not found"));
  };

  const updateTask = (id, updatedTask) => {
    axios
      .patch(`https://expressjs-server.vercel.app/tasks/${id}`, {...updatedTask})
      .then(() => getTasks())
      .catch(() => alert("Task not found"));
  };

  const deleteTask = (id) => {
    axios
      .delete(`https://expressjs-server.vercel.app/tasks/${id}`)
      .then(() => getTasks())
      .catch(() => alert("Task not found"));
  };

  return (
    <div className="App">
      {/* Column */}
      <div className="container text-center">
        <h2>Kanban board</h2>

        {/* Button Create_new_task */}
        <CreateNewTaskModal
          priorities={priorities}
          statusesTitles={statusesTitles}
          createNewTask={createNewTask}
        />

        {/* Titles */}
        <div className="row align-items-start" style={{marginTop: "16px"}}>
          {statuses.map((status) => (
            <Column
              key={status._id}
              status={status}
              tasks={tasks}
              statusesTitles={statusesTitles}
              changeStatus={changeStatus}
              changePriority={changePriority}
              priorities={priorities}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
