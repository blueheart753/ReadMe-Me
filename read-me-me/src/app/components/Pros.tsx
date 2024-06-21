import Image from 'next/image';
import styles from '../page.module.css';

const Pros = () => {
  return (
    <article className={styles.prosConsContainer}>
      <div className={styles.descriptionWrap}>
        <p className={styles.title}>Pros.</p>
        <p className={styles.info}>장점.</p>
      </div>
      <div className={styles.imgBox}>
        <Image
          src={'/pros_image.png'}
          alt="이타심"
          width={100}
          height={100}
          className={styles.prosConsImg}
        />
      </div>
      <div className={styles.descriptionBox}>
        <p className={styles.subTitle}>타인을 위하는 이타심.</p>
        <p className={styles.description}>
          누군가를 도와주는 것 희열을 느끼며 좋아하며 <br /> 도움을 주는 것으로
          저의 존재의의를 깨닫고 행복을 느낍니다.
        </p>
      </div>
    </article>
  );
};

export default Pros;
