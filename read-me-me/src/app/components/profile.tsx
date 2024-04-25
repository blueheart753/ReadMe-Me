import Image from 'next/image';

const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="sm:w-screen flex flex-col flex-wrap p-2 gap-2 border-b">
        <p className="line-clamp-2 text-3xl font-black text-center leading-relaxed sm:text-7xl">
          안녕하세요!
        </p>
        <p className="line-clamp-2 text-3xl font-black text-center leading-relaxed sm:text-7xl">
          제 이름은 <span className="whitespace-nowrap">김미남</span> 입니다!
        </p>
      </div>
      <div>
        <div className="overflow-hidden w-40 m-auto border-slate-500 border-2 rounded-full">
          <Image
            src={'/Kimminam.png'}
            alt="내 사진"
            width={180}
            height={100}
            className="m-auto"
          />
        </div>
        <div className="p-6">
          <p className="font-semibold text-center">
            세상에 대한 호기심으로 어려움을 찾고 <br />
            문제를 해결을 위해 나아가는 개발자
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
