import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import supabase from "./assets/supabase";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    async function getTask() {

      // get tasks from database table and update state
      let query = supabase.from("TaskTracker").select("*");
      const { data: alltasks, error } = await query.limit(1000);

      // handle Error
      if (error) {
        console.log(error);
      } else {
        setTasks(() => alltasks);
      }
    }
    getTask();
  }, [tasks]);

  // Delete task from database table and update state
  async function onDelete(id) {
    const { data: myTasks, error } = await supabase
      .from("TaskTracker")
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      alert("there was an error");
    } else {
      setTasks(() => myTasks);
    }
  }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
