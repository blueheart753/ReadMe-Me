import Image from 'next/image'
import styles from '../page.module.css'

const Hobby = () => {
  return (
    <section className={styles.hobbyContainer}>
      <div className={styles.descriptionWrap}>
        <p className={styles.title}>Hobby.</p>
        <p className={styles.info}>취미.</p>
      </div>
      <div className={styles.hobbyImage}>
        <Image
          src={'/Hobby_image.png'}
          width={200}
          height={180}
          alt="취미생활"
        />
      </div>
      <div className={styles.descriptionBox}>
        <p className={styles.subTitle}>노래 듣기.</p>
        <p className={styles.description}>
          저의 취미는 노래를 듣는 것입니다. 노래의 장르는 다양하게 듣습니다.
          Kpop, Pop, Jpop등을 듣고 가장 좋아하는 노래는 <br />
          <strong className={styles.favoriteSong}>로이킴 - 살아가는거야</strong>
        </p>
      </div>
    </section>
  )
}

export default Hobby
