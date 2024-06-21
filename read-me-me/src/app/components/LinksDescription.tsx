import Image from 'next/image';
import styles from '../page.module.css';
import Link from 'next/link';

interface Props {
  links: string;
  image_link: string;
  image_description: string;
}

const LinksDescription = ({ image_link, image_description, links }: Props) => {
  return (
    <div>
      <Link className={styles.extranalDescription} href={links}>
        <Image
          src={`/${image_link}.png`}
          alt={image_description}
          width={60}
          height={60}
        />
        <p className={styles.imageDescription}>{image_description}</p>
      </Link>
    </div>
  );
};

export default LinksDescription;
