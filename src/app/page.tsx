'use client'

import { useState } from 'react'
import { personalInfo, projects, blogPosts } from '@/data/portfolio-data'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} personalInfo={personalInfo} />
      <main>
        <Hero personalInfo={personalInfo} />
        <About personalInfo={personalInfo} />
        <Projects projects={projects} />
        <Blog posts={blogPosts} />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  )
}