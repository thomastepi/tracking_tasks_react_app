import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className={`task ${task.reminder && "reminder"}`}>
      <h3>
        {task.task}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
