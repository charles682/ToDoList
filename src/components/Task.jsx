import styles from "./Task.module.css"
import { RiDeleteBin4Fill } from "react-icons/ri";

export function Task({ task }) {
    return(
        <div className={styles.container}>
            {task.title}
            <RiDeleteBin4Fill />

        </div>
    )
    
    
}
