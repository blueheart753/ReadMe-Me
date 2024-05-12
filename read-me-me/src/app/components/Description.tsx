const Description = (props: { title: string; description: string }) => {
  const { title, description } = props
  return (
    <div className="p-4 flex flex-col gap-2">
      <p className="text-xl sm:text-3xl text-center font-semibold">{title}</p>
      <p className="w-full text-md sm:text-xl text-center">{description}</p>
    </div>
  )
}

export default Description
