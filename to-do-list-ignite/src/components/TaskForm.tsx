import styles from './TaskForm.module.css';
import plus from '../assets/plus.svg';
import { FormEvent, useState, ChangeEvent } from 'react';

interface taskProps {
    onCreatedTask: (Task: string) => void;
}

export function TaskForm({ onCreatedTask }: taskProps) {
    const [newTaskText, setNewTaskText] = useState<string>('');
    const isNewTaskOnlyWhiteSpaces: boolean = (/^[ \t]+$/.test(newTaskText));
    const isNewTaskEmpty = newTaskText.length === 0 || isNewTaskOnlyWhiteSpaces;

    function handleNewTaskText(event: FormEvent) {
        event.preventDefault();
        
        onCreatedTask(newTaskText);
        setNewTaskText('')
    }

    function onChangeTextArea(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value);
    }

    return (
        <form className={styles.newTaskForm} onSubmit={handleNewTaskText}>
            <input 
                placeholder='Adicionar uma nova tarefa' 
                value={newTaskText} 
                onChange={onChangeTextArea} 
            />

            <button type='submit'  disabled={isNewTaskEmpty}>
                Criar
                <img src={ plus } alt="Plus Icon" />
            </button>
        </form>
    );
}