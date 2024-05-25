import { SolarSystem } from "./SolarSystem";
import Link from "next/link";

const Hero = () => {
  return (
    <section className='flex-center flex-col relative  z-10 mt-40'>
      <div className='flex-center flex-col text-center gap-20 md:gap-28 lg:mt-20  z-10'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-700 text-5xl md:text-6xl xl:text-7xl font-extrabold backdrop-blur-sm tracking-widest'>
          <span className='text-white text-4xl md:text-5xl tracking-wide'>
            Hello, I'm{" "}
          </span>
          <br></br>
          Brennam
        </h1>
        <p
          style={{ textShadow: "1px 1px 1px #2E2A41" }}
          className='text-white text-xl lg:text-2xl font-medium backdrop-blur-sm  sm:max-w-[90%] xl:max-w-[80%]  text-balance tracking-wider lg:tracking-wide '
        >
          A Front End Developer with nearly 2 years of web development
          experience. Let me help you create the web app of your dreams!
        </p>
        <div className=' px-1 md:px-[5px] py-1 md:py-[5px] rounded-lg w-[175px] md:w-[200px]'>
          <Link
            href={"/assets/images/Resume.pdf"}
            target='_blank'
            rel='noopener noreferrer'
            locale={false}
            download
            className='block md:text-lg transition-colors bg-gradient-to-r from-purple-500 to-pink-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-800  text-white border-4 border-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg '
          >
            Download CV
          </Link>
        </div>
      </div>

      <SolarSystem />
    </section>
  );
};

export default Hero;
