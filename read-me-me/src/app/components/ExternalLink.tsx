import { useRouter } from 'next/navigation'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  link: string
  name: string
}

const ExtranalLink = ({ src, alt, link, name }: Props) => {
  const router = useRouter()

  return (
    <div className="text-center">
      <div>
        <Image
          src={src}
          alt={alt}
          width={50}
          height={50}
          onClick={() => router.push(link)}
          className="sm:h-24 sm:w-24 cursor-pointer"
        />
        <span className="text-white p-2">{name}</span>
      </div>
    </div>
  )
}

export default ExtranalLink
