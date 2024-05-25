"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

import { myNavLinks } from "../../constants";
import { MobileMenu } from ".";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = myNavLinks;

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className='fixed top-0 left-0 w-full bg-gradient-to-r from-sky-900 via-blue-950 to-purple-950 opacity-90 z-50'
    >
      <div className='flex items-center justify-between px-5 py-4 sm:px-8  md:px-10 xl:px-14'>
        <Link
          href='/'
          className='flex-center gap-2 transition ease-in-out delay-100 hover:scale-105'
        >
          <Image
            src='/assets/images/logo.png'
            width={1000}
            height={1000}
            className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12'
            alt='Logo'
          />
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 text-2xl sm:text-3xl lg:text-4xl font-semibold block'>
            PORTFOLIO
          </p>
        </Link>

        {/* MOBILE NAV MENU */}
        <div
          id='mobile-nav-menu'
          className='md:hidden bg-gradient-to-r from-purple-500 to-pink-600 flex-center py-[6px] px-2 rounded-lg '
        >
          {!navbarOpen ? (
            <button
              onClick={() => {
                setNavbarOpen(true);
              }}
            >
              <HiMenu className='h-5 w-5 text-white transition-colors hover:text-[#2E2A41]' />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              <HiX className='h-5 w-5 text-white transition-colors hover:text-[#2E2A41]' />
            </button>
          )}
        </div>

        {/* DESKTOP NAV MENU */}
        <div className='hidden md:flex md:items-end'>
          <div className='flex-center gap-10 lg:gap-14 xl:gap-20'>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                title={link.title}
                className='text-lg lg:text-[20px]   uppercase text-white transition hover:text-pink-600 font-bold tracking-wider ease-in-out delay-100 hover:scale-110'
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {navbarOpen ? <MobileMenu links={navLinks} /> : null}
    </motion.nav>
  );
};

export default Navbar;
