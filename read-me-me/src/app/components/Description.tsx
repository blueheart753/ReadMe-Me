const Description = (props: {
  title: string
  description: React.ReactNode
  subTitle: string
}) => {
  const { title, subTitle, description } = props
  return (
    <article className="w-9/12 border-2 w-96 h-1/2 p-4 rounded-lg bg-slate-800">
      <div className="p-2">
        <h1 className="text-white text-4xl">{title}</h1>
        <h3 className="text-gray-400">{subTitle}</h3>
      </div>
      <div className="text-gray-400 text-xl p-2">{description}</div>
    </article>
  )
}

export default Description
