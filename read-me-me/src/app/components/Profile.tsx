import Image from 'next/image';
import profileImage from '../Images/Profile.jpg';
import styles from '../page.module.css';

export interface PageTitleContentProps {
  title: string;
  subTitle?: string;
  profileImage: string;
  myJob: string;
}

const Profile = () => {
  return (
    <article className={styles.profileWrap}>
      <Image src={profileImage} alt="Profile" className={styles.profileImage} />
      <div className={styles.discriptionWrap}>
        <div className={styles.discriptionTitle}>
          <p className={styles.title}>Info.</p>
          <p className={styles.info}>간단한 정보.</p>
        </div>
        <div className={styles.discriptionBox}>
          <p className={styles.discription}>김미남(Kim minam)</p>
          <p className={styles.discription}>kimminam8520@gmail.com</p>
          <p className={styles.discription}>서울디지텍고등학교 재학 중</p>
        </div>
      </div>
    </article>
  );
};

export default Profile;
