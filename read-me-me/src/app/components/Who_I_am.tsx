'use client'
import Description from './Description'

const WhoIAm = () => {
  const description: { introduce: string; motto: string } = {
    introduce: '호기심을 통해 성장하며 문제해결을 위해 공부하는 개발자',
    motto:
      '실수는 한 순간이며 언제든 만회할 수 있다. 힘든 상황에서도 희망은 존재한다.',
  }

  const externalLinkInfos: { src: string; alt: string; link: string }[] = [
    {
      src: '/github_logo.png',
      alt: 'githubLogo',
      link: 'https://github.com/blueheart753',
    },
    {
      src: '/Instagram_logo.png',
      alt: 'Instagram_logo',
      link: 'https://www.instagram.com/kimminami50/',
    },
    {
      src: '/rallit_icon.svg',
      alt: 'rallit_icon',
      link: 'https://www.rallit.com/hub/resumes/29560/%EA%B9%80%EB%AF%B8%EB%82%A8',
    },
    {
      src: '/velog_logo.jpg',
      alt: 'velog_icon',
      link: 'https://velog.io/@blueboom/posts',
    },
  ]

  return (
    <div className="w-full h-screen flex flex-col items-center relative p-6">
      <div className="w-4/5 h-16 border-2 rounded-2xl flex items-center p-6">
        <span className="text-white text-2xl font-SUITRegular">Kim Minam</span>
      </div>
    </div>
  )
}

export default WhoIAm
