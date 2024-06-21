import styles from '../page.module.css'

interface likeOrDislike {
  isLike: boolean
}

const LikeDislike = ({ isLike }: likeOrDislike) => {
  const LikeProps = {
    title: 'Like.',
    subTitle: '좋아하는 것.',
    info: 'IT정보 찾기.',
    desription:
      'WWDC, 구글IO 등 IT와 관련된 이벤트를 찾아보고 참여하는 것을 좋아합니다. 또한 새로운 제품을 찾고 적용함으로써 만족감을 느끼고 있습니다.',
  }

  const DisLikeProps = {
    title: 'Dislike.',
    subTitle: '싫어하는 것.',
    info: '자신의 주장만 펼치는 것.',
    desription:
      '아무런 근거 없이 자신의 주장만 펼치는 것과 타인의 의견을 무시하는 것을 아주 싫어합니다.',
  }

  const currentProps = isLike ? LikeProps : DisLikeProps

  return (
    <section className={styles.likeDescriptionWrap}>
      <div>
        <p className={styles.title}>{currentProps.title}</p>
        <p className={styles.info}>{currentProps.subTitle}</p>
      </div>
      <div className={styles.onlyDescriptionBox}>
        <p className={styles.subTitle}>{currentProps.info}</p>
        <p className={styles.description}>{currentProps.desription}</p>
      </div>
    </section>
  )
}

export default LikeDislike
