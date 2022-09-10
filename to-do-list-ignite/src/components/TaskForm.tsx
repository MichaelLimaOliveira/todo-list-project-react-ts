import styles from './TaskForm.module.css';
import plus from '../assets/plus.svg';
import { FormEvent, useState, ChangeEvent } from 'react';

interface taskProps {
    onCreatedTask: (Task: string) => void;
}

export function TaskForm({onCreatedTask}: taskProps) {
    const [newTaskText, setNewTaskText] = useState('');

    function handleNewTaskText(event: FormEvent) {
        event.preventDefault();
        onCreatedTask(newTaskText);
    }

    function onChangeTextArea(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value);
    }

    return (
        <form className={styles.newTaskForm}>
            <input placeholder='Adicionar uma nova tarefa' onChange={onChangeTextArea} />
            <button onClick={handleNewTaskText}>
                Criar
                <img src={plus} alt="" />
            </button>
        </form>
    );
}