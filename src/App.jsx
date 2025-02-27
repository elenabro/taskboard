import React from "react";
import TaskBoard from "./TaskBoard";
import '@fortawesome/fontawesome-free/css/all.min.css'
 
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color : "green" }}>Task Board</h1>
      <TaskBoard/>
    </div>
  )
}
 
export default App