"use client";

import Image from "next/image";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import { fadeIn, staggerContainer } from "../../lib/utils/motion";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className='text-white  flex-center flex-col relative z-10'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex-center flex-col gap-10'
      >
        <div
          id='about'
          className='lg:grid lg:grid-cols-12 flex-center flex-col gap-2 items-center  lg:gap-8'
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 0.7)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='col-span-5 '
          >
            <Image
              src='/assets/images/spaceman.png'
              alt='Spaceman'
              width={1000}
              height={1000}
              className='w-[350px] sm:w-[400px] md:w-[450px] '
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.3, 0.7)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='col-span-7 '
          >
            <div className='flex-center flex-col gap-6'>
              <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 text-5xl sm:text-6xl font-extrabold uppercase lg:tracking-wide'>
                About Me
              </h2>
              <div className='flex-center flex-col gap-6 sm:max-w-[90%]'>
                <p className='text-base sm:text-lg text-center text-wrap'>
                  I'm a Front End Developer with nearly 2 years of web
                  development experience and strong fundamentals in Front End
                  technologies.
                </p>
                <p className='text-base sm:text-lg text-center  text-wrap'>
                  With experience working with JavaScript, React, Next.js,
                  Node.js, MongoDB, Tailwind, PostgreSQL and more, I'm someone
                  who enjoys developing interactive, user-friendly, and
                  feature-rich web applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 0.7)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='flex-center flex-col gap-10 sm:gap-16 pt-6 lg:pt-0'
        >
          <h3 className=' text-[32px] sm:text-[36px] lg:text-[40px] uppercase font-semibold relative lg:tracking-wide'>
            Skills
            <span className='h-[3px] inset-x-0 bg-gradient-to-r from-purple-600 to-pink-700 absolute -bottom-1'></span>
          </h3>
          <div className='flex-center flex-col'>
            <ul className='grid grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-start'>
              <li className='flex-center flex-col gap-1 lg:pr-10'>
                <Link href='https://react.dev/' target='_blank'>
                  <SiReact
                    className='text-[#61dbfb] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 transition ease-in-out delay-150 hover:scale-125'
                    id='React Logo'
                  />
                </Link>
                <p className=' font-semibold sm:text-[18px] xl:text-[20px]'>
                  React
                </p>
              </li>

              <li className='flex-center flex-col gap-1'>
                <Link href='https://nextjs.org/' target='_blank'>
                  <SiNextdotjs className='text-gray-200 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 transition ease-in-out delay-150 hover:scale-125' />
                </Link>
                <p className=' font-semibold sm:text-[18px] xl:text-[20px]'>
                  Next.js
                </p>
              </li>

              <li className='flex-center flex-col gap-1 lg:pl-10'>
                <Link href='https://nodejs.org/en' target='_blank'>
                  <SiNodedotjs className='text-[#3C873A] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 transition ease-in-out delay-150 hover:scale-125' />
                </Link>
                <p className=' font-semibold sm:text-[18px] xl:text-[20px]'>
                  Node.js
                </p>
              </li>

              <li className='flex-center flex-col gap-1 lg:pr-10'>
                <Link href='https://tailwindcss.com/' target='_blank'>
                  <SiTailwindcss className='text-[#06b6d4] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 transition ease-in-out delay-150 hover:scale-125' />
                </Link>
                <p className=' font-semibold sm:text-[18px] xl:text-[20px]'>
                  Tailwind CSS
                </p>
              </li>

              <li className='flex-center flex-col gap-1'>
                <Link href='https://www.mongodb.com/' target='_blank'>
                  <SiMongodb className='text-[#00ed64] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 transition ease-in-out delay-150 hover:scale-125' />
                </Link>
                <p className=' font-semibold sm:text-[18px] xl:text-[20px]'>
                  MongoDB
                </p>
              </li>

              <li className='flex-center flex-col gap-1 lg:pl-10'>
                <Link href='https://www.postgresql.org/' target='_blank'>
                  <SiPostgresql className='text-[#008bb9] w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 transition ease-in-out delay-150 hover:scale-125' />
                </Link>
                <p className=' font-semibold sm:text-[18px] xl:text-[20px]'>
                  PostgreSQL
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
