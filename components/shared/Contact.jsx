"use client";

import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { fadeIn, staggerContainer } from "../../lib/utils/motion";
import { motion } from "framer-motion";
import { MotionForm } from ".";

const Contact = () => {
  return (
    <section
      id='contact'
      className=' flex-center flex-col  relative z-10 mb-40'
    >
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex-center flex-col gap-10'
      >
        <div className='lg:grid lg:grid-cols-12 flex-center flex-col-reverse gap-2 items-center lg:gap-8 lg:pb-20'>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 0.7)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='col-span-7 '
          >
            <div className='flex-center flex-col gap-6'>
              <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-700 text-5xl sm:text-6xl font-extrabold uppercase lg:tracking-wide'>
                Contact Me
              </h2>
              <p className='text-base sm:text-lg text-center text-wrap text-white md:max-w-[90%]'>
                I'm currently looking for new opportunities, and my inbox is
                always open. Whether you have a question for me or just want to
                say "hi", please feel free to reach out at any time!
              </p>
              <div className='flex-center gap-24 md:gap-32 md:py-6 w-full'>
                <Link target='_blank' href='https://github.com/brennambond'>
                  <SiGithub className='w-10 h-10 text-white transition ease-in-out hover:scale-110 hover:text-purple-500' />
                </Link>
                <Link
                  target='_blank'
                  href='https://www.linkedin.com/in/brennambond/'
                >
                  <SiLinkedin className='w-10 h-10 text-white transition ease-in-out hover:scale-110 hover:text-pink-500' />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.3, 0.7)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className=' col-span-5'
          >
            <Image
              src='/assets/images/spaceship.png'
              alt='Spaceship'
              width={1000}
              height={1000}
              className='w-[350px] sm:w-[400px] md:w-[450px] '
            />
          </motion.div>
        </div>

        <MotionForm />
      </motion.div>
    </section>
  );
};

export default Contact;
