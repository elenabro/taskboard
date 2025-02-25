import React, { useEffect , useState} from "react";
import axios from "axios";
import TaskCard from "./TaskCard";
import styles from "./TaskBoard.module.css";
import FilterTasks from "./FilterTasks";
import $ from "jquery";
import "gasparesganga-jquery-loading-overlay";

const TaskBoard = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("ALL");

    
    useEffect(() => {
        $.LoadingOverlaySetup({
            imageResizeFactor: 0.55,
            imageColor: "#00FF00",
            fade: 0
        });

        $.LoadingOverlay("show");

        axios
        .get("https://taskboard.portnov.com/api/Task")
        .then((response) => {
            setTasks(response.data);
            setTimeout(() => {
                    $.LoadingOverlay("hide");
                }, 1000);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            $.LoadingOverlay("hide");
        });
}, []);


    const filteredTasks = tasks.filter((task) =>{
    if (filter === "ALL") {
        return true;
    }
        return task.status.toUpperCase() === filter.toUpperCase();   
});
  


    return (
        <div>
            <FilterTasks filter={filter} setFilter={setFilter} />
            
            <div className={styles.taskBoard}>
                {
                    tasks.length === 0 ? (<p>Loading in progress ...</p>

                    ) : (
                        filteredTasks.map((task) =>  <TaskCard key={task.id} task={task} />)
                    )  
                  }                 
                          
                
            </div>
        </div>
    );

};

export default TaskBoard;

