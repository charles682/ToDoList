import {Header} from './components/Header' 
import {Tasks} from './components/Tasks'
import { Empty } from './components/Empty'
import { FaPlusCircle } from "react-icons/fa";

import styles from './App.module.css'
import './global.css'
import { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: `${tasks.length + 1}`,
          title: newTask,
          completed: false,
        }
      ]);
      setNewTask('');
    }
  };


  return (
    <div className={styles.main}>
      <Header/>
          <div className={styles.wrapper}>
            <div className={styles.commentForm}>
            <form className={styles.commentForm} onSubmit={handleSubmit}>
              <input
                name="comment"
                placeholder="ADICIONE UMA NOVA TAREFA!"
                value={newTask}
                onChange={handleInputChange}
                required
              />  

                  <footer>
                  <button type="submit">
                      Criar
                      <FaPlusCircle />
                  </button>
                  </footer>
                  </form>
              </div>  
              <div className={styles.info}>
                <p className={styles.created}>
                    Tafefas criadas 0
                </p>
                <p className={styles.done}>
                    Concluidas 1
                </p>
            </div>   
              {tasks.length > 0 ? <Tasks tasks={tasks} /> : <Empty />}
        </div>
    </div> 
  )
}

export default App
