import React from "react";  

const FilterTasks = ({filter,setFilter}) => {
    return(
        <div>  
            <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="ALL">ALL</option>
                    <option value="New">NEW</option>
                    <option value="UPDATE">UPDATE</option>
                    <option value="UPDATED">UPDATED</option>
                    <option value="UPDATED2">UPDATED2</option>
                    <option value="UPDATED TWICE">UPDATED TWICE</option>
                    <option value="DONE">DONE</option>
                    <option value="OK">OK</option>
                    <option value="STRING">STRING</option>
                    <option value="TASK CREATION">TASK CREATION</option> 
                    <option value="TASK PUT CHANGE">TASK PUT CHANGE</option>  
                    <option value="CHANGE">CHANGE</option> 
                    <option value="SECONDARY">SECONDARY</option>
                    <option value="IN PROGRESS">IN PROGRESS</option>
                    <option value="OPEN">OPEN</option>
                    
            </select>
        </div>
       );

};

export default FilterTasks;