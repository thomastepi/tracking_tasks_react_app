import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import supabase from "./assets/supabase";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTask() {

      let query = supabase.from("TaskTracker").select("*");

      const { data: alltasks, error } = await query.limit(1000);

      // handle Error
      if (error) {
        console.log(error);
        alert("There was a problem getting data");
      } else {
        setTasks(() => alltasks);
      }
    }
    getTask();
  }, []);

  // async function onDelete() {
  //   const { error } = await supabase
  // .from('TaskTracker')
  // .delete()
  // .eq('id', 'someValue')
  // }

  return (
    <div className="container">
      <AddTask />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
