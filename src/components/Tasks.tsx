import PastIcon from "../assets/Icon/Past.icon";
import styles from "./Tasks.module.css";
import { Trash } from "phosphor-react"

export const Tasks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navTask}>
        <div>
          <h1>Tarefas criadas</h1>
          <span>0</span>
        </div>

        <div>
          <h1>Concluídas</h1>
          <span>0</span>
        </div>
      </div>
      <div className={styles.divider}></div>
      {/* 
      <div className={styles.empty}>
        <PastIcon />
        <h1>Você ainda não tem tarefas cadastradas</h1>
        <h1>Crie tarefas e organize seus itens a fazer</h1>
      </div> */}

      <div className={styles.withFull}>
        <input
          type="checkbox"
          id="newTask"
          name=""
          value=""
        />
        <label htmlFor="newTask"> Comprar geladeiras </label>
        <Trash size={20}/>
      </div>
    </div>
  );
};
