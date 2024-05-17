'use client';
import Image from 'next/image';
import Description from './Description';
import ExternalLink from './ExternalLink';
import Stack from './Stack';

const WhoIAm = () => {
  const description: { info: React.ReactNode; motto: React.ReactNode } = {
    info: (
      <>
        <p>Kim-Minam</p>
        <p>kimminam8520@gmail.com</p>
        <p>서울디고등학교 재학 중</p>
      </>
    ),
    motto: (
      <>
        <p>넘어지는 것을 두려워 해라.</p>
        <p>
          넘어지는 것이 두렵다면 다음에는 넘어지지 않게 방법을 생각하고
          움직여라.
        </p>
      </>
    ),
  };

  const externalLinkInfos: Array<{ [key: string]: string }> = [
    {
      src: '/github_logo.png',
      alt: 'GitHub Logo',
      link: 'https://github.com/blueheart753',
      name: 'GitHub',
    },
    {
      src: '/Instagram_logo.png',
      alt: 'Instagram Logo',
      link: 'https://www.instagram.com/kimminami50/',
      name: 'Instagram',
    },
    {
      src: '/rallit_icon.svg',
      alt: 'Rallit Icon',
      link: 'https://www.rallit.com/hub/resumes/29560/%EA%B9%80%EB%AF%B8%EB%82%A8',
      name: 'Rallit',
    },
    {
      src: '/velog_logo.jpg',
      alt: 'Velog Icon',
      link: 'https://velog.io/@blueboom/posts',
      name: 'Velog',
    },
  ];

  const StackInfos: Array<{ [key: string]: string }> = [
    { src: '/HTML.png', alt: 'HTML', name: 'HTML' },
    { src: '/CSS.png', alt: 'CSS', name: 'CSS' },
    { src: '/JS.png', alt: 'JS', name: 'JS' },
    { src: '/React.png', alt: 'React', name: 'React' },
    { src: '/Next.png', alt: 'Next', name: 'Next' },
    { src: '/tailwindcss.png', alt: 'tailwindcss', name: 'tailwindcss' },
  ];

  return (
    <section className="sm:w-full sm:h-screen flex flex-col items-center relative p-6">
      <section className="w-full flex flex-col items-center justify-center">
        <article className="w-full sm:w-4/5 h-2 sm:h-16 border-2 rounded-2xl flex items-center p-6">
          <span className="mx-auto sm:mx-0 text-white sm:text-2xl font-SUITSemiBold">
            Kim Minam
          </span>
        </article>
        <section className="h-1/8 flex flex-col sm:flex-row auto-rows-auto items-center justify-center">
          <article className="h-1/2 md:h-full p-10  relative sm:left-32">
            <Image
              src="/Kimminam.JPG"
              width={400}
              height={400}
              alt="김미남 사진"
              className="rounded-lg h-full"
            />
          </article>
          <article className="h-2/3 sm:h-full flex items-center justify-center flex-col gap-10 sm:w-3/8">
            {Object.entries(description).map(([key, value]) => (
              <Description
                key={key}
                title={key.charAt(0).toUpperCase() + key.slice(1) + '.'}
                subTitle={key === 'info' ? '간단한 정보' : '좌우명'}
                description={value}
              />
            ))}
          </article>
        </section>
      </section>
      <section className="sm:w-8/12 flex flex-col sm:flex-row gap-10 py-10">
        <article className="sm:w-2/5 w-80 flex flex-1 flex-col border-2 p-2 sm:p-4 rounded-lg bg-slate-800 h-1/12">
          <div className="p-2">
            <h1 className="text-white text-2xl sm:text-4xl font-SUITSemiBold">
              ExternalLink.
            </h1>
            <h3 className="text-gray-400">외부링크.</h3>
          </div>
          <div className="flex justify-around ">
            {externalLinkInfos.map((info, index) => (
              <ExternalLink
                key={index}
                src={info.src}
                alt={info.alt}
                link={info.link}
                name={info.name}
              />
            ))}
          </div>
        </article>
        <article className="sm:w-2/5 w-80 flex flex-1 flex-col border-2 p-2 sm:p-4 rounded-lg bg-slate-800 h-1/12">
          <div className="p-2">
            <h1 className="text-white text-2xl sm:text-4xl font-SUITSemiBold">
              Stack.
            </h1>
            <h3 className="text-gray-400">기술스택.</h3>
          </div>
          <div className="flex justify-center">
            {StackInfos.map((stack, index) => (
              <Stack
                key={index}
                src={stack.src}
                alt={stack.alt}
                name={stack.name}
              />
            ))}
          </div>
        </article>
      </section>
    </section>
  );
};

export default WhoIAm;
