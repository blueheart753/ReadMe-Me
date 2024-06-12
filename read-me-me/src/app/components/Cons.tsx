import Image from 'next/image';
import styles from '../page.module.css';

const Cons = () => {
  return (
    <article className={styles.prosConsContainer}>
      <div className={styles.discriptionWrap}>
        <p className={styles.title}>Cons.</p>
        <p className={styles.info}>단점.</p>
      </div>
      <div className={styles.imgBox}>
        <Image
          src={'/cons_image.png'}
          alt="이타심"
          width={100}
          height={100}
          className={styles.prosConsImg}
        />
      </div>
      <div className={styles.discriptionBox}>
        <p className={styles.subTitle}>포기하지 않는 끈기.</p>
        <p className={styles.discription}>
          무언가를 포기하지 않고 해낸다는 것은 좋은 것이지만 <br /> 가끔 너무
          오래 붙잡아두고 있어 문제가 발생하는 경우도 있습니다.
        </p>
      </div>
    </article>
  );
};

export default Cons;
