
import {Header} from './components/Header' 
import { Post } from './components/Post'
import { Empty } from './components/Empty'
import { FaPlusCircle } from "react-icons/fa";

import styles from './App.module.css'
import './global.css'
function App() {
  return (
    <div className={styles.main}>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles.commentForm}>
                  <input
                      name="comment"
                      placeholder="ADICIONE UMA NOVA TAREFA!"
                      required
                      />

                  <footer>
                  <button type="submit">
                      Criar
                      <FaPlusCircle />
                  </button>
                  </footer>
              </div>  
              <Post/>
              <Empty/>
            
        </div>
    </div> 
  )
}

export default App
