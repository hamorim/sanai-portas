import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <h2>Sanai Portas</h2>
        <nav>
          <a href="/">Principal</a>
          <a href="/">Trabalhos</a>
          <a href="/">Serviços</a>
          <a href="/">Blog</a>
        </nav>
      </div>
    </header>
  );
};
