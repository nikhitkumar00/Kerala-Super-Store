import CountUp from "react-countup";

const Intro = () => {
  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="rounded-full border-indigo-700 text-4xl font-semibold transition-all duration-200 ease-in hover:scale-110 sm:text-8xl">
          Kerala Super Store
        </div>
        <CountUp
          prefix="Since "
          start={2024}
          end={1970}
          duration={3}
          className="text-3xl font-semibold italic text-indigo-700"
        />
      </div>
    </div>
  );
};

export default Intro;
