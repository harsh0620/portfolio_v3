import { Hero } from '@/app/components/sections/hero'
import { About } from '@/app/components/sections/about'
import { Skills } from '@/app/components/sections/skills'
import { Projects } from '@/app/components/sections/projects'
import { Experiences } from '@/app/components/sections/experiences'
import { Education } from '@/app/components/sections/education'
import { Now } from '@/app/components/sections/now'
import { Contact } from '@/app/components/sections/contact'
import { Footer } from '@/app/components/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Education />
      <Now />
      <Contact />
      <Footer />
    </>
  )
}
