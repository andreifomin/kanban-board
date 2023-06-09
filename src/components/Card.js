import React from "react";
import DeleteTaskModal from "./DeleteTaskModal";
import UpdateTaskModal from "./UpdateTaskModal";

function Card(props) {
  const {
    task,
    isFirstCard,
    statusesTitles,
    changeStatus,
    changePriority,
    priorities,
    updateTask,
    deleteTask,
  } = props;

  const priorityToWord = (priority) => {
    switch (priority) {
      case 1:
      case 2:
      case 3:
        return "High";
      case 4:
      case 5:
      case 6:
      case 7:
        return "Medium";
      case 8:
      case 9:
      case 10:
        return "Low";
      default:
        return "Out of range";
    }
  };

  return (
    <div className="card" style={isFirstCard ? null : { marginTop: "12px" }}>
      {/* Task name and description */}
      <div className="card-body">
        <h5 className="card-title">{task.name}</h5>
        <p className="card-text">{task.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        {/* Status and buttons Move_left, Move_right */}
        <li className="list-group-item">
          {/* Button Move_left */}
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{width: "32px", height: "32px", padding: "0px"}}
            onClick={() => changeStatus(task._id, task.status, -1)}
            disabled={task.status === statusesTitles[0]}
          >
            ←
          </button>{" "}
          {task.status} {/* Button Move_right */}
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{width: "32px", height: "32px", padding: "0px"}}
            onClick={() => changeStatus(task._id, task.status, 1)}
            disabled={task.status === statusesTitles[statusesTitles.length - 1]}
          >
            →
          </button>
        </li>
        {/* Priority and buttons Priority_up, Priority_down */}
        <li className="list-group-item">
          Priority:{" "}
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            style={{width: "24px", height: "24px", padding: "0px"}}
            onClick={() => changePriority(task._id, +task.priority - 1)}
            disabled={priorities[0] === +task.priority}
          >
            ↑
          </button>{" "}
          {priorityToWord(+task.priority)}{" "}
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            style={{width: "24px", height: "24px", padding: "0px"}}
            onClick={() => changePriority(task._id, +task.priority + 1)}
            disabled={priorities[priorities.length - 1] === +task.priority}
          >
            ↓
          </button>
        </li>
      </ul>

      {/* Buttons Delete, Update */}
      <div className="card-body">
        {/* Button Update */}
        <UpdateTaskModal task={task} updateTask={updateTask} />{" "}
        {/* Button Delete */}
        <DeleteTaskModal task={task} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default Card;
