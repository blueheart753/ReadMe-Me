'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ExtranalLink = (props: any) => {
  const { src, alt, link, gird } = props;
  const router = useRouter();

  return (
    <div>
      <Image
        src={`${src}`}
        alt={`${alt}`}
        width={50}
        height={50}
        onClick={() => router.push(`${link}`)}
        className="sm:h-24 sm:w-24 cursor-pointer ${gird}"
      />
    </div>
  );
};

export default ExtranalLink;
