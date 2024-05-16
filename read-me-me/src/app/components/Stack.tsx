import Image from 'next/image';

type props = {
  src: string;
  alt: string;
  name: string;
};

const Stack = ({ src, alt, name }: props) => {
  return (
    <div className="text-center flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <Image
          src={src}
          alt={alt + 'img'}
          width={50}
          height={50}
          className="sm:h-20 sm:w-20 cursor-pointer"
        />
        <span className="text-white p-2">{name}</span>
      </div>
    </div>
  );
};

export default Stack;