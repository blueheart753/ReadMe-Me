'use client';
import Image from 'next/image';
import Description from './Description';
import ExtranalLink from './ExternalLink';

const WhoIAm = () => {
  const description: any = {
    introduce: (
      <>
        호기심을 통해 성장하며 배우고
        <br /> 문제해결을 위해 공부하는 개발자
      </>
    ),
    motto: (
      <>
        실수는 한 순간이며 언제든 만회할 수 있다.
        <br />
        힘든 상황에서도 희망은 존재한다.
      </>
    ),
  };

  const ExtranalLinks: Record<string, string> = {
    gitHub: 'https://github.com/blueheart753',
    instagram: 'https://www.instagram.com/kimminami50/',
    rallit:
      'https://www.rallit.com/hub/resumes/29560/%EA%B9%80%EB%AF%B8%EB%82%A8',
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-t from-orange-200 relative">
      <div className="absolute top-2 sm:top-10 sm:left-10 ">
        <span className="sm:text-4xl font-black text-2xl">Who I AM</span>
      </div>
      <div className="w-full flex gap-10 flex-col items-center sm:gap-20">
        <div className="w-1/2 flex flex-col items-center gap-6 sm:flex sm:flex-row sm:justify-around">
          <Image
            src={'/Kimminam.JPG'}
            alt="김미남"
            className="rounded-3xl"
            width={300}
            height={250}
          />
          <div className="w-full h-full border-2 border-solid border-black p-2 rounded-lg sm:w-4/12">
            <div className="w-full flex-block p-2">
              <p className="text-center">Kim'Minam HUB</p>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <ExtranalLink
                src={'/github_logo.png'}
                alt={'githubLogo'}
                link={ExtranalLinks.gitHub}
              />
              <ExtranalLink
                src={'/Instagram_logo.png'}
                alt={'Instagram_logo'}
                link={ExtranalLinks.instagram}
              />
              <ExtranalLink
                src={'/rallit_icon.svg'}
                alt={'rallit_icon'}
                link={ExtranalLinks.rallit}
              />
            </div>
          </div>
        </div>
        <div className="sm:flex sm:flex-row flex flex-col justify-around items-center sm:gap-10 gap-4">
          <Description title={'소개'} description={description.introduce} />
          <Description title={'좌우명'} description={description.motto} />
        </div>
      </div>
    </div>
  );
};

export default WhoIAm;
