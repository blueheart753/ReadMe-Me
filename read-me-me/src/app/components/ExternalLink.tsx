import { useRouter } from 'next/navigation'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  link: string
}

const ExtranalLink = ({ src, alt, link }: Props) => {
  const router = useRouter()

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={50}
        height={50}
        onClick={() => router.push(link)}
        className="sm:h-24 sm:w-24 cursor-pointer"
      />
    </div>
  )
}

export default ExtranalLink
