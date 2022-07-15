import { Logo } from "../assets/Icon/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
