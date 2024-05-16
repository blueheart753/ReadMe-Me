const Description = (props: {
  title: string;
  description: React.ReactNode;
  subTitle: string;
}) => {
  const { title, subTitle, description } = props;
  return (
    <article className="sm:w-9/12 border-2 w-96 sm:p-4 p-2 rounded-lg bg-slate-800">
      <div className="p-2">
        <h1 className="text-white text-2xl sm:text-4xl font-SUITSemiBold">
          {title}
        </h1>
        <h3 className="text-gray-400">{subTitle}</h3>
      </div>
      <div className="text-gray-400 sm:text-xl p-2">{description}</div>
    </article>
  );
};

export default Description;
