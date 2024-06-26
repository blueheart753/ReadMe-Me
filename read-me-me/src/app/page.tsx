import styles from './page.module.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Pros from './components/Pros';
import Cons from './components/Cons';
import ExtranalLink from './components/ExtranalLink';
import Hobby from './components/Hobby';
import LikeDislike from './components/LikeDislike';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.sectionWrap}>
        <Profile />
        <section className={styles.prosConsWrap}>
          <Pros />
          <Cons />
        </section>
        <section className={styles.otherWrap}>
          <ExtranalLink />
          <section className={styles.hobbyLikeDislikeWrap}>
            <Hobby />
            <section className={styles.LikeDislikeWrap}>
              <LikeDislike isLike={true} />
              <LikeDislike isLike={false} />
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
