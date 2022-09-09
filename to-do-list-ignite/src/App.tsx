import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskInput } from './components/TaskInput'

export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <TaskInput />
    </div>
  )
}

