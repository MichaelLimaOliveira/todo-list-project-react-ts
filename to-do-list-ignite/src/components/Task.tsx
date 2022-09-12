import styles from './Task.module.css';
import { TrashSvg  } from './TrashSvg'
import { ITask } from '../App';
import Vector from '../assets/Vector.svg';
interface Props {
    task: ITask;
    onDeleteTask: (id: string) => void;
    onCompletedTask: (id: string) => void;
}

export function Task({task, onDeleteTask, onCompletedTask}: Props) {
    const isCompleted = task.isCompleted;

    function handleDeleteTask() {    
        onDeleteTask(task.id);  
    }

    function handleIsCompletedTask() {
        onCompletedTask(task.id);
    }

    return (
        <div className={isCompleted ? styles.taskCompleted : styles.task}>
            <button 
                className={isCompleted ? styles.checked : styles.noChecked}
                onClick={handleIsCompletedTask}
            >
                <div><img src={ Vector } hidden={!isCompleted} className={styles.vectorImg} /></div>
            </button>
            <p>{task.content}</p>
            <button 
                className={styles.trash} 
                onClick={handleDeleteTask}
            >
                <TrashSvg className={styles.trash}/>
            </button>
        </div>
    );
}
