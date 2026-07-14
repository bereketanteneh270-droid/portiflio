import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Gallery from '@/components/sections/Gallery';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Awards from '@/components/sections/Awards';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Services />
      <Process />
      <Testimonials />
      <Awards />
      <Blog />
      <Contact />
    </>
  );
}
