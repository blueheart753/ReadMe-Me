import styles from '../page.module.css';
import LinksDescription from './LinksDescription';

const ExtranalLinks = {
  instagram: 'https://www.instagram.com/kimminami50/',
  github: 'https://github.com/blueheart753',
  rallit:
    'https://www.rallit.com/hub/resumes/29560/%EA%B9%80%EB%AF%B8%EB%82%A8?isExpanded=true',
  tistory: 'https://gimminam.tistory.com/',
};

const ExtranalLink = () => {
  return (
    <section className={styles.extranalLinksContainer}>
      <div className={styles.descriptionWrap}>
        <p className={styles.title}>ExtranalLink.</p>
        <p className={styles.info}>외부링크.</p>
      </div>
      <div className={styles.linkBox}>
        <LinksDescription
          image_link="Instagram_logo"
          image_description="Instagram"
          links={ExtranalLinks.instagram}
        />
        <LinksDescription
          image_link="github_logo"
          image_description="Github"
          links={ExtranalLinks.github}
        />
        <LinksDescription
          image_link="rallit_icon"
          image_description="Rallit"
          links={ExtranalLinks.rallit}
        />
        <LinksDescription
          image_link="tistory_logo"
          image_description="Tistory"
          links={ExtranalLinks.tistory}
        />
      </div>
    </section>
  );
};

export default ExtranalLink;
