import { ITask } from '../App';
import { Task } from './Task';
import styles from './TaskBody.module.css';
import  Clipboard  from '../assets/Clipboard.svg';
interface Props {
    tasks: ITask[];
    sendTaskToDelete: (id: string) => void;
    onCompletedTask: (id: string) => void;
}

export function TaskBody({ tasks, sendTaskToDelete, onCompletedTask }: Props) {
    const taskOrdered = tasks.sort((task, nextTask)=> { 
        if(task.isCompleted == nextTask.isCompleted) return 0;
        return task.isCompleted ? 1 : -1;
    });
    const taskCount = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted);

    return (
        <section className={ styles.tasks }>
            <header className={ styles.header }>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>{ taskCount }</span>
                </div>

                <div>
                    <p className={ styles.textPurple }>Concluídas</p>
                    <span>{ completedTasks.length } de { taskCount }</span>
                </div>
            </header>
            <div className={styles.list}>
                {taskOrdered.map((task) => {
                    return(
                        <Task 
                            key={task.id}
                            task={task}
                            onDeleteTask={sendTaskToDelete}
                            onCompletedTask={onCompletedTask}
                        />
                    )
                })}


                {taskOrdered.length <= 0 && (
                    <div className={ styles.empytTasks }>
                        <div className={ styles.clipboard }>
                            <img src={Clipboard} alt="" />
                        </div>
                        <div className={ styles.clipboardText }>
                            <div><p>Você ainda não tem tarefas cadastradas</p></div>
                            <div><p>Crie tarefas e organize seus itens a fazer</p></div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}