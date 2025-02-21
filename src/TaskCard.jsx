import React from "react";
import styles from "./TaskCard.module.css";

const TaskCard = ({task}) => {
    const statusClass = styles[`status${task.status.replace(" ", "_").toUpperCase()}`];

    return (
        <div className={styles.taskTile}>
            <h3 className={styles.id}>{task.id}</h3>
            <h3 className={styles.title}>{task.taskName}</h3>
            <p className={styles.description}>{task.description}</p>
            <span className={`${styles.status} ${statusClass}`}>{task.status.toUpperCase()}</span>
        </div>
    );
};

export default TaskCard;