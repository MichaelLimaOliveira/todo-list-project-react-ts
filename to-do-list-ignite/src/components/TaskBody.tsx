import { Tasks } from '../App';
import { Task } from './Task';
import styles from './TaskBody.module.css';
import { useState } from 'react';
interface listTaskProps {
    listTask: string[]
}

export function TaskBody({ listTask }: listTaskProps) {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas Criadas</p>
                    <span>10</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>2 de 5</span>
                </div>
            </header>
            <div className={styles.list}>
                {listTask.map((task) => {
                    return(
                        <Task 
                            key={task}
                            content={task}
                        />
                    )
                })}
            </div>
        </section>
    )
}