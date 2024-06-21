import Image from 'next/image';
import styles from '../page.module.css';

const Hobby = () => {
  return (
    <section className={styles.hobbyContainer}>
      <div className={styles.discriptionWrap}>
        <p className={styles.title}>Hobby.</p>
        <p className={styles.info}>취미.</p>
      </div>
      <div className={styles.hobbyImage}>
        <Image
          src={'/Hobby_image.png'}
          width={180}
          height={180}
          alt="취미생활"
        />
      </div>
      <div className={styles.discriptionBox}>
        <p className={styles.subTitle}>노래 듣기.</p>
        <p className={styles.discription}>
          저의 취미는 노래를 듣는 것입니다. 노래의 장르는 다양하게 듣습니다.
          Kpop, Pop, Jpop을 주로 듣고 가장 좋아하는 노래는
          <strong className={styles.favoriteSong}>
            {' '}
            로이킴 - 살아가는거야
          </strong>
        </p>
      </div>
    </section>
  );
};

export default Hobby;
