import styles from '../page.module.css';

const Header = () => {
  return (
    <section className={styles.titleWrap}>
      <div className={styles.titleBox}>
        <h1 className={styles.titleName}>KimMinam</h1>
      </div>
    </section>
  );
};

export default Header;
