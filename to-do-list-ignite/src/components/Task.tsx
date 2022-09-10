import styles from './Task.module.css';
import { SvgComponent  } from './TrashSvg'

interface Content {
    content: string
}

export function Task({content}:Content ) {

    return (
        <div className={styles.task}>
            <input type = "checkbox" className={styles.checked}></input>
            <p>{content}</p>
            <button className={styles.trash}><SvgComponent className={styles.trash}/></button>
        </div>
    );
}
