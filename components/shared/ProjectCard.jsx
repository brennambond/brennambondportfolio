import { HiEye, HiLink } from "react-icons/hi";

import ProjectsAccordian from "./ProjectsAccordian";

const ProjectCard = ({ imgUrl, gitUrl, previewUrl }) => {
  return (
    <div className='w-[350px] sm:w-[400px] md:w-[425px] lg:w-[550px] shadow-slate-900 shadow-xl rounded-xl overflow-hidden'>
      <div
        className='h-52 lg:h-72  group'
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          id='overlay'
          className='relative items-center justify-center gap-8 top-0 left-0 w-full h-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60 bg-[#262641] transition-all duration-500'
        >
          <a
            href={gitUrl}
            target='_blank'
            className='h-14 w-14  border-2  rounded-full border-white hover:border-purple-500 group/link transition ease-in-out hover:scale-110'
          >
            <HiLink className='h-10 w-10 text-white relative  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-purple-500 ' />
          </a>

          <a
            href={previewUrl}
            target='_blank'
            className='h-14 w-14 border-2  rounded-full border-white hover:border-pink-500 group/link transition ease-in-out hover:scale-110'
          >
            <HiEye className='h-10 w-10 text-white relative  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-pink-500' />
          </a>
        </div>
      </div>
      <div className='text-white text-center bg-[#262641] pt-8 pb-4 px-4 overflow-hidden '>
        <ProjectsAccordian />
      </div>
    </div>
  );
};

export default ProjectCard;
