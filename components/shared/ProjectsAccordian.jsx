import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const ProjectsAccordian = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='rounded-b-xl overflow-hidden'
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger>
          Project Description
          <span className='h-[2px] inset-x-0 bg-gradient-to-r from-purple-600 to-pink-700 absolute -bottom-0' />
        </AccordionTrigger>
        <AccordionContent>
          This application allows users to join, create, and update event-like
          "Raids". With seamless payment processing via Stripe, users will be
          able to purchase tickets for any Raid they choose with ease.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>
          Tech Stack
          <span className='h-[2px] inset-x-0 bg-gradient-to-r from-purple-600 to-pink-700 absolute -bottom-0'></span>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='grid grid-cols-3 gap-8 text-center items-start pt-4'>
            <li className='flex-center flex-col gap-1'>
              <Link href='https://react.dev/' target='_blank'>
                <SiReact
                  className='text-[#61dbfb] w-10 h-10 transition ease-in-out delay-150 hover:scale-125'
                  id='React Logo'
                />
              </Link>
              <p className='text-white font-semibold'>React</p>
            </li>

            <li className='flex-center flex-col gap-1'>
              <Link href='https://nextjs.org/' target='_blank'>
                <SiNextdotjs className='text-gray-200 w-10 h-10 transition ease-in-out delay-150 hover:scale-125' />
              </Link>
              <p className='text-white font-semibold'>Next.js</p>
            </li>

            <li className='flex-center flex-col gap-1'>
              <Link href='https://nodejs.org/en' target='_blank'>
                <SiNodedotjs className='text-[#3C873A] w-10 h-10 transition ease-in-out delay-150 hover:scale-125' />
              </Link>
              <p className='text-white font-semibold'>Node.js</p>
            </li>

            <li className='flex-center flex-col gap-1'>
              <Link href='https://tailwindcss.com/' target='_blank'>
                <SiTailwindcss className='text-[#06b6d4] w-10 h-10 transition ease-in-out delay-150 hover:scale-125' />
              </Link>
              <p className='text-white font-semibold'>Tailwind CSS</p>
            </li>

            <li className='flex-center flex-col gap-1'>
              <Link href='https://www.mongodb.com/' target='_blank'>
                <SiMongodb className='text-[#00ed64] w-10 h-10 transition ease-in-out delay-150 hover:scale-125' />
              </Link>
              <p className='text-white font-semibold'>MongoDB</p>
            </li>

            <li className='flex-center flex-col gap-1'>
              <Link href='https://expressjs.com/' target='_blank'>
                <SiExpress className='text-gray-300 w-10 h-10 transition ease-in-out delay-150 hover:scale-125' />
              </Link>
              <p className='text-white font-semibold'>Express</p>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProjectsAccordian;
