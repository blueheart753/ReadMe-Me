import Image from 'next/image'
import Description from './Description'

const WhoIAm = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-t from-orange-200 relative">
      <div className="absolute top-28 left-10">
        <span className="text-4xl font-black">Who I AM</span>
      </div>
      <div className="w-full flex gap-20 justify-center">
        <div className="flex flex-col justify-around items-end">
          <Description
            title={'소개'}
            description={`호기심으로 어려움을 찾고
        문제해결을 위해 성장하는 개발자`}
          />
          <Description
            title={'좌우명'}
            description={`실수는 한순간이며 언제든 만회 할수있다.`}
          />
        </div>

        <Image
          src={'/Kimminam.JPG'}
          alt="김미남"
          className="rounded-3xl"
          width={300}
          height={250}
        />
      </div>
    </div>
  )
}

export default WhoIAm
