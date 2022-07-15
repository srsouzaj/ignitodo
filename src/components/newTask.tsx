import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";

export const NewTask = () => {
  return (
    <form className={styles.newTask}>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        type="text"
      />
      <button>
        Criar <PlusCircle />
      </button>
    </form>
  );
};
