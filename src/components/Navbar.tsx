import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { NavbarProps } from '@/types/portfolio'

const Navbar = ({ isDarkMode, toggleTheme, personalInfo }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-xl dark:text-white">
            {personalInfo.name}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">
              Projects
            </a>
            <a href="#blog" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">
              Blog
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 dark:text-gray-300">
              Contact
            </a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                About
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Projects
              </a>
              <a
                href="#blog"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar