import styles from './TaskInput.module.css';

import plus from '../assets/plus.svg';

export function TaskInput() {
    return (
        <div className={styles.taskInputArea}>
            <input type="text" />
            <button>Criar <img src={plus} alt="" /></button>
        </div>
    )
}