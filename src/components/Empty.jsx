import styles from './Empty.module.css';

import clipboard from '../assets/Clipboard.svg'

export function Empty(){
    return(
        <div className={styles.mytask}>
            <div className={styles.info}>
                <p className={styles.created}>
                    Tafefas criadas 0
                </p>
                <p className={styles.done}>
                    Concluidas 1
                </p>
            </div>   
            <div className={styles.empty}> 
                <div>
                    <img src={clipboard} alt="" />
                    <p>
                        <strong>Você ainda não tem tarefas cadastradas</strong><br/>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            </div>    

        </div>
    )
}