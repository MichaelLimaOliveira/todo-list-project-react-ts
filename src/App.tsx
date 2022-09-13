import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskBody } from './components/TaskBody';
import { TaskForm } from './components/TaskForm';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTask] = useState<ITask[]>(
    JSON.parse(localStorage.getItem('tasks') || '[]') || []
    );

  function createdTask(taskText: string) {
    const newTasks = {
        id: v4(),
        content: taskText,
        isCompleted: false,
    };

    setTask([...tasks, newTasks]);
  }
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

  function completeTask(id: string) {
    const tempTasks = [...tasks];
    const completedTask = tempTasks.find(task => task.id === id);

    if(!completedTask) return;

    completedTask.isCompleted = !completedTask.isCompleted;
    setTask(tempTasks);
  }

  

  function deleteTaskFromList(idTask: string) {
    const taskListWithoutDeletedOne: ITask[] = tasks.filter((task) => task.id !== idTask);

    setTask(taskListWithoutDeletedOne);
  }

  return (
    <>
      <Header />
      <TaskForm
        onCreatedTask={createdTask} 
      />
      <TaskBody
        tasks={tasks}
        sendTaskToDelete={deleteTaskFromList}
        onCompletedTask={completeTask}
      />
    </>
  );
}

