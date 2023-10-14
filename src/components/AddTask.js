import { useState } from "react";
import supabase from "../assets/supabase";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();

    if (!task) {
      alert("Please add a task");
      return;
    }

    // add task to database table on clicking the submit button
    const { data, error } = await supabase
      .from("TaskTracker")
      .insert([{ task, day, reminder }])
      .select();
    
    setTask("");
    setDay("");
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
