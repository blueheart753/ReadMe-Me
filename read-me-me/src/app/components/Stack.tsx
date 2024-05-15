import Image from 'next/image'

type props = {
  src: string
  alt: string
  name: string
}

const Stack = ({ src, alt, name }: props) => {
  return (
    <div className="text-center">
      <div>
        <Image
          src={src}
          alt={alt + 'img'}
          width={50}
          height={50}
          className="sm:h-24 sm:w-24 cursor-pointer"
        />
        <span className="text-white p-2">{name}</span>
      </div>
    </div>
  )
}

export default Stack
