const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="sm:w-screen flex flex-col flex-wrap p-2 gap-2 justify-center">
        <p className="line-clamp-2 text-3xl font-black text-center leading-relaxed sm:text-7xl">
          안녕하세요!
        </p>
        <p className="line-clamp-2 text-3xl font-black text-center leading-relaxed sm:text-7xl">
          제 이름은 <span className="whitespace-nowrap shadow-lg">김미남</span>{' '}
          입니다!
        </p>
      </div>
    </div>
  );
};

export default Profile;
