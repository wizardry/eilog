import styles from './GlobalHeader.module.css';
const Header = () => {
  return <header className={styles["global-header"]}>
    <h1 className={styles["logo-text"]}>映Log!</h1>
  </header>
}

export default Header;