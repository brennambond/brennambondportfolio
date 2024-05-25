import Link from "next/link";

const MobileMenu = ({ links }) => {
  return (
    <div className='md:hidden flex-center flex-col  gap-4 pt-4 pb-10'>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          title={link.title}
          className='text-xl sm:text-2xl uppercase text-white hover:text-pink-600  px-6 py-5 font-bold tracking-wider transition ease-in-out delay-100 hover:scale-110'
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
