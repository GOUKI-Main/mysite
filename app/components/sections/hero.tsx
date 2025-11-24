"use client";

import AvoidMouseText from "../ui/avoid-mouse-text";
// import P5Animation from "./ui/p5Animation";

const Hero = () => {
  return (
    <section className="h-dvh z-0 grid grid-rows-3 grid-cols-3 md:grid-rows-3 md:grid-cols-3 ">
      <AvoidMouseText
        text={`I'mnnnGOUKI`} //nnnで改行する
        fontSizes={["text-2xl md:text-5xl", "text-5xl md:text-7xl"]}
        containerClassName="col-start-1 -col-end-1 row-start-1 -row-end-1"
      />
      {/* <P5Animation className="col-start-1 -col-end-1 row-start-1 row-end-2" /> */}
    </section>
  );
};

export default Hero;
