import styles from '../page.module.css';

interface likeOrDislike {
  isLike: boolean;
}

interface likeAndDislikeType {
  title: string;
  info: string;
  subTitle: string;
  description: string;
}

const LikeDislike = ({ isLike }: likeOrDislike) => {
  const LikeProps = {
    title: 'Like.',
    subTitle: '좋아하는 것.',
    info: 'IT정보 찾기.',
    desription: 'WWDC, 구글IO등 IT 이벤트를 찾아보고 참여하는 것을 좋아합니다.',
  };

  const DisLikeProps = {
    title: 'Dislike.',
    subTitle: '싫어하는 것.',
    info: '자신의 주장만 펼치는 것.',
    desription: '근거 없이 자신의 주장만 펼치는 것을 아주 싫어합니다.',
  };

  const currentProps = isLike ? LikeProps : DisLikeProps;

  return (
    <section>
      <div className={styles.descriptionWrap}>
        <p className={styles.title}>{currentProps.title}</p>
        <p className={styles.info}>{currentProps.subTitle}</p>
        <div className={styles.descriptionBox}>
          <p className={styles.subTitle}>{currentProps.info}</p>
          <p className={styles.description}>{currentProps.desription}</p>
        </div>
      </div>
    </section>
  );
};

export default LikeDislike;
