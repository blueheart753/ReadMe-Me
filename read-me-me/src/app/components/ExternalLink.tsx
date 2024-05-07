'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ExtranalLink = (props: any) => {
  const { src, alt, link } = props;
  const router = useRouter();

  return (
    <div>
      <Image
        src={`${src}`}
        alt={`${alt}`}
        width={80}
        height={80}
        onClick={() => router.push(`${link}`)}
        className="sm:h-20"
      />
    </div>
  );
};

export default ExtranalLink;
