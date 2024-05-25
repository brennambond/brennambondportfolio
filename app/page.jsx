import {
  Hero,
  Navbar,
  About,
  Projects,
  Contact,
  Footer,
} from "@/components/shared";

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen bg-gradient-to-b from-[#242443] to-purple-950'>
      <Navbar />

      <div className='container mx-auto flex-center flex-col gap-40 sm:gap-60 md:gap-80 '>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
