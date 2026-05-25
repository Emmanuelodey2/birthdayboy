import About from '@/components/About'
import Feedback from '@/components/Feedback'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Lang from '@/components/Languages'
import Project from '@/components/projects'
import Projectstwo from '@/components/Projectstwo'
import Section from '@/components/Section'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
     <Header />
     <Hero />
     <About/>
     <Lang />
     <Project />
     <Projectstwo />
     <Feedback />
     <Section />
    </div>
  )
}

export default LandingPage