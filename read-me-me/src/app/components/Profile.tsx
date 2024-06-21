import Image from 'next/image'
import profileImage from '../Images/Profile.jpg'
import styles from '../page.module.css'

export interface PageTitleContentProps {
  title: string
  subTitle?: string
  profileImage: string
  myJob: string
}

const Profile = () => {
  return (
    <article className={styles.profileWrap}>
      <Image src={profileImage} alt="Profile" className={styles.profileImage} />
      <div className={styles.descriptionWrap}>
        <div className={styles.descriptionTitle}>
          <p className={styles.title}>Info.</p>
          <p className={styles.info}>간단한 정보.</p>
        </div>
        <div className={styles.onlyDescriptionBox}>
          <p className={styles.description}>김미남(Kim minam)</p>
          <p className={styles.description}>kimminam8520@gmail.com</p>
          <p className={styles.description}>서울디지텍고등학교 재학 중</p>
        </div>
      </div>
    </article>
  )
}

export default Profile
