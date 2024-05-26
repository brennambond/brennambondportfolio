import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=' w-full bg-[#1b1b2e] z-50'>
      <div className='flex items-center justify-between px-5 py-6 container'>
        <Link
          href='/'
          className='flex-center gap-2 transition ease-in-out delay-100 hover:scale-105'
        >
          <Image
            src='/assets/images/logo.png'
            width={1000}
            height={1000}
            className='w-8 h-8 '
            alt='Logo'
          />
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-2xl  font-semibold block'>
            PORTFOLIO
          </p>
        </Link>
        <p className='text-white'>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
