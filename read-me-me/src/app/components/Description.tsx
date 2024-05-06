const Description = (props: any) => {
  const { title, description } = props
  return (
    <div className="w-9/12 p-4 flex flex-col">
      <p className="text-3xl text-end font-semibold">{title}</p>
      <p className="text-xl text-end">{description}</p>
    </div>
  )
}

export default Description
