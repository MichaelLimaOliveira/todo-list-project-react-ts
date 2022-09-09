import  styles  from './Header.module.css'
import rocket from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerTitle}>
                <img src={rocket } alt="" />
                <h1>todo</h1>
            </div>
        </header>
    );
}