import React, { useEffect , useState} from "react";
import axios from "axios";
import TaskCard from "./TaskCard";
import styles from "./TaskBoard.module.css";

const TaskBoard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
            .get("https://taskboard.portnov.com/api/Task")
            .then((response) => setTasks(response.data))
            .catch((error) => console.error("Error fetching data: ", error))
    }, []    );



    return (
        <div className={styles.taskBoard}>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>   
            ))}
    
          </div>
    );


};

export default TaskBoard;

