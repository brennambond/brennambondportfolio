import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

const Rings = () => {
  return (
    <>
      <div className='absolute top-1/2 left-1/2 w-[28rem] sm:w-[34rem] md:w-[38rem] lg:w-[46rem] xl:w-[48rem]  aspect-square border border-[#868397] rounded-full -translate-x-1/2 -translate-y-1/2 ' />
      <div className='absolute top-1/2 left-1/2 w-[22rem] sm:w-[27rem] md:w-[30rem] lg:w-[36rem] xl:w-[38rem]  aspect-square border border-[#868397] rounded-full -translate-x-1/2 -translate-y-1/2 ' />
    </>
  );
};

export const SolarSystem = () => {
  return (
    <div className='absolute flex-center flex-col w-[50rem]  z-[1] sm:mt-16 md:mt-24 lg:mt-40 xl:mt-48 '>
      <div
        style={{ backgroundImage: "url('/assets/images/logo.png')" }}
        className='absolute bg-center bg-cover  w-[275px] h-[275px] sm:w-[300px] sm:h-[300px]  md:w-[360px] md:h-[360px]  lg:w-[400px] lg:h-[400px] '
      />
      <Rings />

      {/* REACT PLANET */}
      <div className='absolute left-[24%] sm:left-[19%] md:left-[18%] lg:left-[12%] mb-[260px] sm:mb-[330px] md:mb-[400px] lg:mb-[500px] xl:mb-[420px] xl:left-[6%]'>
        <div className=' rounded-full p-2 bg-gradient-to-br from-[#242443] via-slate-600 to-[#4c768d] border border-[#2E2A41]'>
          <SiReact className='text-[#61dbfb] w-8 sm:w-10 h-8 sm:h-10 lg:w-12 lg:h-12 -rotate-[20deg]' />
        </div>
      </div>

      {/* TYPESCRIPT PLANET */}
      <div className='absolute right-[22%] sm:right-[23%] md:right-[21%] mb-48 sm:mb-60 lg:mb-[330px] lg:right-[17%] xl:mb-[250px] xl:right-[12%]'>
        <div className=' rounded-full p-2 bg-gradient-to-bl from-[#00323f] via-blue-200 to-blue-100 border border-[#2E2A41]'>
          <SiTypescript className='text-[#007acc] w-8 sm:w-10 h-8 sm:h-10 lg:w-12 lg:h-12 px-[2px] sm:px-[3px] lg:px-[4px] rotate-[15deg]' />
        </div>
      </div>

      {/* NEXTJS PLANET */}
      <div className='absolute left-[24%] sm:left-[25%] md:left-[21%] lg:left-[14%] mt-64 lg:mt-56 xl:mt-[276px] xl:left-[12%]'>
        <div className=' rounded-full p-2 bg-gradient-to-tr from-[#2E2A41] via-gray-200 to-gray-100 border border-[#2E2A41]'>
          <SiNextdotjs className='text-black w-8 sm:w-10 h-8 sm:h-10 lg:w-12 lg:h-12 -rotate-[15deg]' />
        </div>
      </div>

      {/* TAILWIND PLANET */}
      <div className='absolute right-[27%] mt-[320px] sm:right-[24%] md:right-[19%] lg:right-[9%] sm:mt-[400px] lg:mt-[420px] xl:mt-[440px] xl:right-[7%]'>
        <div className=' rounded-full p-2 bg-gradient-to-tl from-emerald-400 via-emerald-100 to-teal-100 border border-[#2E2A41]'>
          <SiTailwindcss className='text-[#06b6d4] w-8 sm:w-10 h-8 sm:h-10 lg:w-12 lg:h-12 rotate-[15deg]' />
        </div>
      </div>

      {/* MONGODB PLANET */}
      <div className='hidden xl:flex absolute left-[46%] mt-[600px]'>
        <div className=' rounded-full p-2 bg-gradient-to-b from-[#88E5BE] to-[#2E2A41] border border-[#2E2A41]'>
          <SiMongodb className='text-[#00ed64] w-12 h-12 rotate-[5deg]' />
        </div>
      </div>

      {/* NODEJS PLANET */}
      <div className='absolute hidden xl:flex left-[49%] mb-[760px]'>
        <div className='rounded-full p-2 bg-gradient-to-b from-[#66cc33] to-white border border-[#2E2A41]'>
          <SiNodedotjs className='text-[#339933] w-12 h-12' />
        </div>
      </div>
    </div>
  );
};
