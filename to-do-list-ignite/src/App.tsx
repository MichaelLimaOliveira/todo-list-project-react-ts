import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskBody } from './components/TaskBody';
import { TaskForm } from './components/TaskForm';
import { useState } from 'react';

export interface Tasks {
  content: string;
}

export function App() {
  const [tasks, setTask] = useState([
    'Tarefa Inicial ainda nao sei tirar vc espera ae'
  ]);

  function createdTask(taskText: string) {
    setTask([...tasks, taskText]);
  }

  return (
    <>
      <Header />
      <TaskForm
        onCreatedTask={createdTask} 
      />
      <TaskBody
        listTask={tasks}
      />
    </>
  );
}

