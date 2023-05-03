import React from "react";
import Card from "./Card";

function Column(props) {
  const { status, tasks, statusesTitles, changeStatus, changePriority, priorities, deleteTask } = props;

  return (
    <div className="col">
      <h4>{status.title.toUpperCase()}</h4>
      {tasks
        .filter((task) => task.status === status.title)
        .map((task, i) => (
          <Card
            key={task._id}
            task={task}
            isFirstCard={i === 0}
            statusesTitles={statusesTitles}
            changeStatus={changeStatus}
            changePriority={changePriority}
            priorities={priorities}
            deleteTask={deleteTask}
          />
        ))}
    </div>
  );
}

export default Column;
