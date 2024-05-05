import Image from 'next/image'

const WhoIAm = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-t from-orange-200 relative">
      <div className="absolute top-28 left-10">
        <span className="text-4xl font-black">Who I AM</span>
      </div>
      <div className="w-full flex gap-20 justify-center">
        <div>
          <div className="p-4 flex flex-col">
            <p className="text-2xl text-center font-semibold">신념</p>
            <p className="text-xl text-center">
              세상에 대한 호기심으로 어려움을 찾고 <br />
              문제해결을 위해 발전하는 개발자
            </p>
          </div>
          <p className="text-2xl text-center font-semibold">좌우명</p>
          <p className="text-xl text-center">
            실수는 한순간이며 언제든 만회할수 있다. <br />
            노력만 하면 결과도 뒤집을 수 있다.
          </p>
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
