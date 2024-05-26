"use client";

import { fadeIn } from "../../lib/utils/motion";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id='projects' className='flex-center flex-col relative  z-10'>
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 0.7)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex-center flex-col z-10 gap-8 lg:gap-12'
      >
        <div className='flex-center flex-col gap-16'>
          <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 text-5xl sm:text-6xl font-extrabold uppercase lg:tracking-wide'>
            Projects
          </h2>
          <h3 className='text-white text-[26px] sm:text-[28px] md:text-[32px] xl:text-[36px] uppercase font-semibold relative lg:tracking-wide'>
            Realm Raiders
            <span className='h-[3px] inset-x-0 bg-gradient-to-r from-purple-600 to-pink-700 absolute -bottom-1'></span>
          </h3>
        </div>
        <div className='flex-center flex-col'>
          <ul className='flex-center'>
            <li>
              <ProjectCard
                imgUrl='/assets/images/realmraiders.png'
                gitUrl='https://github.com/brennambond/realmraiders'
                previewUrl='https://realmraiders.vercel.app/'
              />
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
